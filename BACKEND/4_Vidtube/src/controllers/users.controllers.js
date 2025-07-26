import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const userCheck = asyncHandler(async (req, res) => {
  try {
    // 1. Extract data from request
    const { fullName, username, email, password } = req.body;

    // 2. Initial validation
    if (
      [fullName, username, email, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    // 3. Check for existing user
    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      throw new ApiError(409, "User with email or username already exists");
    }

    // 4. Check for file uploads
    console.log("Files received:", req.files);
    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    const coverLocalPath = req.files?.coverImage?.[0]?.path;

    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar image is required");
    }

    // 5. Upload files to Cloudinary
    let avatar = null;
    let coverImage = null;

    // Upload avatar (required)
    try {
      avatar = await uploadOnCloudinary(avatarLocalPath);
      if (!avatar || !avatar.url) {
        throw new ApiError(500, "Avatar upload failed");
      }
      console.log("Avatar uploaded successfully:", avatar.url);
    } catch (error) {
      console.error("Error uploading avatar:", error);
      throw new ApiError(500, "Failed to upload avatar image");
    }

    // Upload cover image (optional)
    if (coverLocalPath) {
      try {
        coverImage = await uploadOnCloudinary(coverLocalPath);
        console.log("Cover image uploaded successfully:", coverImage?.url);
      } catch (error) {
        console.error("Error uploading cover image:", error);
        // Clean up the avatar that was already uploaded
        if (avatar?.public_id) {
          await deleteFromCloudinary(avatar.public_id);
          console.log("Deleted avatar due to cover image upload failure");
        }
        throw new ApiError(500, "Failed to upload cover image");
      }
    } else {
      console.log("No cover image provided");
    }

    // 6. Create user object for database
    const userObj = {
      fullName,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase(),
    };

    console.log("Creating user with data:", {
      ...userObj,
      password: "********", // Don't log the actual password
    });

    // 7. Create user in database
    const user = await User.create(userObj);

    // 8. Fetch user without sensitive information
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      // Clean up Cloudinary resources if user retrieval fails
      await cleanupCloudinaryResources(avatar, coverImage);
      throw new ApiError(500, "Failed to retrieve created user");
    }

    // 9. Send success response
    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User registered successfully"));
  } catch (error) {
    console.error("User registration error:", error);

    // Handle different types of errors
    if (error instanceof ApiError) {
      // Pass through ApiError instances
      return res
        .status(error.statusCode)
        .json(new ApiResponse(error.statusCode, null, error.message));
    }

    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      console.log("Validation errors:", validationErrors);

      return res
        .status(400)
        .json(
          new ApiResponse(
            400,
            { validationErrors },
            `Validation failed: ${validationErrors.join(", ")}`
          )
        );
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      console.log(`Duplicate key error for field: ${field}`);

      return res
        .status(409)
        .json(
          new ApiResponse(409, null, `User with this ${field} already exists`)
        );
    }

    // Generic error response
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          null,
          `Failed to register user: ${error.message || "Unknown error occurred"}`
        )
      );
  }
});

/**
 * Helper function to clean up Cloudinary resources
 */
async function cleanupCloudinaryResources(avatar, coverImage) {
  try {
    if (avatar) {
      await deleteFromCloudinary(avatar.public_id);
      console.log(`Avatar image deleted: ${avatar.public_id}`);
    }

    if (coverImage) {
      await deleteFromCloudinary(coverImage.public_id);
      console.log(`Cover image deleted: ${coverImage.public_id}`);
    }
  } catch (cleanupError) {
    console.error(
      "Error during cleanup of Cloudinary resources:",
      cleanupError
    );
  }
}

export { userCheck };

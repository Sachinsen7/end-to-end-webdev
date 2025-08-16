import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, username, email, password } = req.body;

  if (
    [fullName, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const avatarPath = req.files?.avatar?.[0]?.path;
  const coverPath = req.files?.coverImage?.[0]?.path;

  if (!avatarPath) {
    throw new ApiError(400, "Avatar is required");
  }

  // const avatar = await uploadOnCloudinary(avatarPath);

  // let coverImage = "";

  // if (coverImage) {
  //   coverImage = await uploadOnCloudinary(coverPath);
  // }

  let avatar;
  try {
    avatar = await uploadOnCloudinary(avatarPath);
    console.log("Avatar uploaded:", avatar);
  } catch (error) {
    console.error("Error uploading avatar:", error);
    throw new ApiError(500, "Failed to upload avatar");
  }

  let coverImage;
  try {
    coverImage = await uploadOnCloudinary(coverPath);
    console.log("Cover image uploaded:", coverImage);
  } catch (error) {
    console.error("Error uploading cover image:", error);
    throw new ApiError(500, "Failed to upload cover image");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    username: username.toLowerCase(),
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

export { registerUser };

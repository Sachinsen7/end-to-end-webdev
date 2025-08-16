import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (loacalPath) => {
  try {
    console.log("Cloudinary Config: ", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    if (!loacalPath) return null;
    const response = await cloudinary.uploader.upload(loacalPath, {
      resource_type: "auto",
    });

    console.log(
      "File Uploaded in cloaudinary seuccessfully, File Path:",
      response.url
    );

    // once the file is uploaded, we would like to delete it from the server

    fs.unlinkSync(loacalPath);
    return response;
  } catch (error) {
    fs.unlinkSync(loacalPath);
    return null;
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    const result = cloudinary.uploader.destroy(publicId);
    console.log(
      "file deletd from cloudinary successfully, File Path:",
      publicId
    );
  } catch (error) {
    comsole.error("error detecting file from cloudinary: ", error);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };

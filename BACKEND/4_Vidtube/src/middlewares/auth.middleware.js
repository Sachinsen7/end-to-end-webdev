import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { ApiError } from "../utils/apiError";

import { asyncHandler } from "../utils/asyncHandler";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token =
            req.cookies.accessToken ||
            req.headers.header("Authorization").replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Access token not found");
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decoded?._id).select(
            "-password -refreshToken"
        );

        if (!user) {
            throw new ApiError(401, "User not found");
        }

        req.user = user;

        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});

import {
    registerUser,
    loginUser,
    logoutUser,
} from "../controllers/users.controllers.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.post(
    "/register",
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        },
    ]),
    registerUser
);

// secured route
router.post("/logout", verifyJWT, logoutUser);

export default router;

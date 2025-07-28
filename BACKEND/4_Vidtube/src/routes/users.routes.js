import { userCheck } from "../controllers/users.controllers.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route("/registered").post(
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
  userCheck
);

export default router;

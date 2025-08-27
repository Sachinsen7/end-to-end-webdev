import { Permission, Role } from "appwrite";
import { questionAttatchmentCollection } from "../name";
import { storage } from "./config";

export default async function getOrCreateStorageBucket() {
  try {
    await storage.getBucket(questionAttatchmentCollection);
    console.log("Bucket already exists");
  } catch (e) {
    try {
      await storage.createBucket(
        questionAttatchmentCollection,
        questionAttatchmentCollection,
        [
          Permission.read(Role.any()),
          Permission.create(Role.users()),
          Permission.update(Role.users()),
          Permission.delete(Role.users()),
        ],
        false,
        undefined,
        undefined,
        ["jpg", "png", "jpeg", "gif", "svg", "webp", "tiff", "bmp", "ico"]
      );

      console.log("Bucket created");
    } catch (error) {
      console.log(error);
    }
  }
}

import { commentCollection, db } from "../name";
import { databases } from "./config";
import { Role, Permission } from "appwrite";

export default async function createCommentCollection() {
  await databases.createCollection(db, commentCollection, commentCollection, [
    Permission.read(Role.any()),
    Permission.read(Role.any()),
    Permission.create(Role.users()),
    Permission.update(Role.users()),
    Permission.delete(Role.users()),
  ]);

  console.log("Comment collection created");

  // creating attributes

  await Promise.all([
    databases.createStringAttribute(
      db,
      commentCollection,
      "content",
      10000,
      true
    ),
    databases.createStringAttribute(
      db,
      commentCollection,
      "autherId",
      50,
      true
    ),
    databases.createEnumAttribute(
      db,
      commentCollection,
      "type",
      ["answer", "question"],
      true
    ),
    databases.createStringAttribute(db, commentCollection, "typeId", 50, true),
  ]);

  console.log("Comment attributes created");
}

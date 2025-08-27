import { IndexType, Permission, Role } from "node-appwrite";
import { db, questionCollection } from "../name";
import { databases } from "./config";

export default async function createQuestionsCollection() {
  await databases.createCollection(db, questionCollection, questionCollection, [
    Permission.read(Role.any()),
    Permission.read(Role.any()),
    Permission.create(Role.users()),
    Permission.update(Role.users()),
    Permission.delete(Role.users()),
  ]);
  console.log("Question collection created");

  // attributes

  await Promise.all([
    databases.createStringAttribute(db, questionCollection, "title", 100, true),
    databases.createStringAttribute(
      db,
      questionCollection,
      "content",
      10000,
      true
    ),
    databases.createStringAttribute(
      db,
      questionCollection,
      "autherId",
      50,
      true
    ),
    databases.createStringAttribute(
      db,
      questionCollection,
      "tags",
      50,
      true,
      undefined,
      true
    ),

    databases.createStringAttribute(
      db,
      questionCollection,
      "atacthmentId",
      50,
      false
    ),
  ]);

  console.log("Question attributes created");

  // await Promise.all([
  //   databases.createIndex(
  //     db,
  //     questionCollection,
  //     "title",
  //     IndexType.Fulltext,
  //     ["title"],
  //     ["asc"]
  //   ),
  //   databases.createIndex(
  //     db,
  //     questionCollection,
  //     "content",
  //     IndexType.Fulltext,
  //     ["content"],
  //     ["asc"]
  //   ),
  // ]);

  // this can be added via appwrite docs
}

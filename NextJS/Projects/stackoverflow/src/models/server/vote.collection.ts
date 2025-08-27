import { Permission, Role } from "appwrite";
import { db, voteCollection } from "../name";
import { databases } from "./config";

export default async function createVoteCollection() {
  await databases.createCollection(db, voteCollection, voteCollection, [
    Permission.read(Role.any()),
    Permission.read(Role.any()),
    Permission.create(Role.users()),
    Permission.update(Role.users()),
    Permission.delete(Role.users()),
  ]);

  console.log("Vote collection created");

  // creating attributes

  await Promise.all([
    databases.createEnumAttribute(
      db,
      voteCollection,
      "type",
      ["question", "answer"],
      true
    ),
    databases.createStringAttribute(db, voteCollection, "voteById", 50, true),
    databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
    databases.createStringAttribute(db, voteCollection, "answerId", 50, true),
    databases.createEnumAttribute(
      db,
      voteCollection,
      "voteStatus",
      ["upvoted", "downvoted"],
      true
    ),
  ]);

  console.log("Vote collection attributes created");
}

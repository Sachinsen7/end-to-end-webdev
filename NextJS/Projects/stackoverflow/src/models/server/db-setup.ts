import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collections";
import createQuestionsCollection from "./question.collection";
import createVoteCollection from "./vote.collection";
import getOrCreateStorageBucket from "./storage-setup";

import { databases } from "./config";

export default async function getOrCreateDB() {
  try {
    await databases.get(db);
    console.log("Database already exists");
  } catch (error) {
    try {
      await databases.create(db, db);
      console.log("Database created");

      // create collections
      await Promise.all([
        createAnswerCollection(),
        createCommentCollection(),
        createQuestionsCollection(),
        createVoteCollection(),
        getOrCreateStorageBucket(),
      ]);

      console.log("Collections created");
    } catch (error) {
      console.log("Error creating database", error);
    }
  }

  return databases;
}

import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";
import env from "@/app/env";

let client = new Client();

client
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId)
  .setKey(env.appwrite.apiKey);

export const databases = new Databases(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);
export const users = new Users(client);

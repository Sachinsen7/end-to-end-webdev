import env from "@/app/env";

import { Client, Account, Avatars, Databases, Storage } from "appwrite";

export const client = new Client();

client.setEndpoint(env.appwrite.endpoint).setProject(env.appwrite.projectId);

export const databases = new Databases(client);
export const account = new Account(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);

export { ID } from "appwrite";

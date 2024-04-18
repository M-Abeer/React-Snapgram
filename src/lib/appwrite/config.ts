import { Client, Account, Databases, Storage, Avatars } from "appwrite";
import { url } from "inspector";
export const appwriteConfig = {
  projectId: "6621397bb05e5908c90e",
  url: "https://cloud.appwrite.io/v1",
};

export const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

import dotenv from "dotenv";
dotenv.config();

export const isDev = () => process.env.ENVIRONMENT === "development";

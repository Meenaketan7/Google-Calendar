import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
const prisma = new PrismaClient();
config();

const configs = {
  PORT: process.env.PORT,
  API_VERSION: `api/v1`,
  HOST: `${process.env.HOST}`,
  USER_PASSWORD: `${process.env.USER_PASSWORD}`,
  JWT_SECRET: `${process.env.JWT_SECRET}`,
  MAIL_USER: `${process.env.MAIL_USER}`,
  MAIL_PASS: `${process.env.MAIL_PASS}`,
  CLIENT_ID: `${process.env.CLIENT_ID}`,
CLIENT_SECRET: `${process.env.CLIENT_SECRET}`,
REDIRECT_URL:`${process.env.REDIRECT_URL}`
};

export { configs, prisma };

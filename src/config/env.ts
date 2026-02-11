import * as dotenv from "dotenv";
dotenv.config();

export const ENV = {
  port: process.env.PORT || "3000",
  network: process.env.NETWORK || "local"
};

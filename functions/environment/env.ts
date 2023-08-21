import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const env = {
  sc: process.env.SC_WEBHOOK as string,
  prc: process.env.PRC_WEBHOOK as string,
};

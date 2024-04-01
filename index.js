import express from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();
import { datarouter } from "./routes/dataroute.js";

server.use(express.json());
server.use(express.static("public"));
server.use("/data", datarouter);

server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});

import express from "express";
import {
  createdata,
  replacedata,
  updatedata,
  getalldata,
  getdatabyid,
  deletedata,
} from "../controller/data.js";
export const datarouter = express.Router();

datarouter
  .post("/", createdata)

  .put("/:id", replacedata)

  .patch("/:id", updatedata)

  .delete("/:id", deletedata)

  .get("/", getalldata)

  .get("/:id", getdatabyid);

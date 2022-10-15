import express from "express";
import jwt from "jsonwebtoken";
import Schedule from "../controllers/schedule.js";
import { isAuth } from "../common/utils.js";

const schedule = express();
const scheduleController = new Schedule();
schedule.get("/", isAuth, async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const author = authorization.split("Bearer ");
    jwt.verify(author[1], "acan", (err, decode) => {
      if (err) {
        res.status(401).send({ data: null, message: "invalid token" });
      } else {
        scheduleController.getListSchcedule(decode.idUser, (data) => {
          res.send(data);
        });
      }
    });
  } catch {}
});
export default schedule;

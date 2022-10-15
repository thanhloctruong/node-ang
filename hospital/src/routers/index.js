import express from "express";
import auth from "./auth.js";
import schedule from "./schedule.js";
import faculty from "./common.js";
const Router = express();
Router.use("/auth", auth);
Router.use("/common", faculty);
Router.use("/schedule", schedule);
export default Router;

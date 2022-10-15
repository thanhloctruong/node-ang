import express from "express";
import path from "path";
// import "./modals/connect.js";
// import "./src/controllers/auth.js";
import Router from "./src/routers/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.use(
  cors({
    origin: "*",
  })
);
const port = process.env.PORT || 8088;

app.use("/api/v1", Router);
app.get("/", (req, res) => {
  res.send("server is already");
});
// console.log("--//--  sa   ----  ");
// const httpServer = http.Server(app);
// httpServer.listen(port, () => {
//   console.log(`Serve at http://localhost:${port}`);
// });
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

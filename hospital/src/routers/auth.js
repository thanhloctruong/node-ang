import express from "express";
import Auth from "../controllers/auth.js";
import { generateToken, isAuth } from "../common/utils.js";
const auth = express();
const authController = new Auth();
auth.get("/", async (req, res) => {
  try {
    authController.getListUser((data) => {
      res.send(data);
    });
  } catch {}
});
auth.post("/signin", async (req, res) => {
  try {
    var username = req.body.username;
    var password = req.body.password;
    authController.finduser(username, (user) => {
      if (user) {
        authController.signin(username, password, (data) => {
          if (data != "") {
            res.status(200).send({
              data: data,
              token: generateToken(data),
              msgCode: 12.1,
              message: "success",
            });
          } else {
            res.status(401).send({
              data: data,
              msgCode: 11,
              message: "User name or Password is incorrect!",
            });
          }
        });
      } else {
        res.status(401).send({
          data: data,
          msgCode: 11,
          message: "User name or Password is incorrect!",
        });
      }
    });
  } catch {}
});

auth.post("/register", async (req, res) => {
  try {
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var phonenumber = req.body.phonenumber;
    var email = req.body.email;
    authController.finduser(username, (user) => {
      if (user == "") {
        authController.register(
          username,
          password,
          name,
          phonenumber,
          email,
          (data) => {
            if (data) {
              res.status(200).send({
                data: data,
                msgCode: `11.1`,
                message: "success",
              });
            }
          }
        );
      } else {
        res.status(400).send({
          data: null,
          msgCode: `11.0.Email.02`,
          message: "User name were registed",
        });
      }
    });
  } catch {
    console.log("--//--  error   ----  ");
  }
});

auth.post("/update-profile", async (req, res) => {
  try {
    var password = req.body.password;
    var name = req.body.name;
    var phonenumber = req.body.phonenumber;
    var address = req.body.address;
    var identification = req.body.identification;

    authController.finduser(username, (user) => {
      if (user == "") {
        authController.register(
          username,
          password,
          name,
          phonenumber,
          email,
          (data) => {
            if (data) {
              res.status(200).send({
                data: data,
                msgCode: `11.1`,
                message: "success",
              });
            }
          }
        );
      } else {
        res.status(400).send({
          data: null,
          msgCode: `11.0.Email.02`,
          message: "User name were registed",
        });
      }
    });
  } catch {
    console.log("--//--  error   ----  ");
  }
});

export default auth;

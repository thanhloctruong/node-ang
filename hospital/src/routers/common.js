import express from "express";
import Faculty from "../controllers/faculty.js";
import DoctorInfo from "../controllers/doctorInfo.js";
import { isAuth } from "../common/utils.js";

const common = express();
const facultyController = new Faculty();
const doctorInfoContainer = new DoctorInfo();
common.post("/faculty", async (req, res) => {
  try {
    var param = req.body.idFaculty;
    if (param == "") {
      facultyController.getListFaculty((data) => {
        res.send(data);
      });
    } else {
      facultyController.getFaculty(param, (data) => {
        //   console.log("--//--  data   ----  ", data);
        res.send(data);
      });
    }
  } catch {}
});
common.post("/doctor-info", isAuth, async (req, res) => {
  try {
    var param = req.body.idFaculty;
    if (param == "") {
      doctorInfoContainer.getListDoctor((data) => {
        res.send(data);
      });
    } else {
      doctorInfoContainer.getDoctor(param, (data) => {
        res.send(data);
      });
    }
  } catch {}
});
export default common;

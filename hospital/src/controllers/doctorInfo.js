import connect from "../common/connect.js";
class DoctorInfo {
  getListDoctor(result) {
    connect.query("SELECT * FROM thongtinbacsi", function (err, data, fields) {
      if (err) throw err;
      result(data);
    });
  }
  getDoctor(idFaculty, result) {
    connect.query(
      "SELECT * FROM thongtinbacsi where ID_chuyenKhoa = '" + idFaculty + "'",
      function (err, data, fields) {
        if (err) throw err;
        result(data);
      }
    );
  }
}
export default DoctorInfo;

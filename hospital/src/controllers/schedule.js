import connect from "../common/connect.js";
class Schedule {
  getListSchcedule(idUser, result) {
    connect.query(
      "SELECT * FROM lichkham where MaTaiKhoan = '" + idUser + "'",
      function (err, data, fields) {
        if (err) throw err;
        result(data);
      }
    );
  }
}
export default Schedule;

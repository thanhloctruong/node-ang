import connect from "../common/connect.js";
class Faculty {
  getListFaculty(result) {
    connect.query("SELECT * FROM chuyenkhoa", function (err, data, fields) {
      if (err) throw err;
      result(data);
    });
  }
  getFaculty(idFaculty, result) {
    connect.query(
      "SELECT * FROM chuyenkhoa where ID_chuyenKhoa = '" + idFaculty + "'",
      function (err, data, fields) {
        if (err) throw err;
        result(data);
      }
    );
  }
}
export default Faculty;

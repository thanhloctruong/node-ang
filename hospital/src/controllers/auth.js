import connect from "../common/connect.js";
class Auth {
  getListUser(result) {
    connect.query("SELECT * FROM taikhoan", function (err, data, fields) {
      if (err) throw err;
      result(data);
    });
  }
  signin(username, password, result) {
    connect.query(
      `SELECT * FROM taikhoan where  taikhoan.TenDangNhap  = '` +
        username +
        "' and MatKhau ='" +
        password +
        "'",
      function (err, data, fields) {
        if (err) {
          result("");
        } else {
          result(data);
        }
      }
    );
  }
  finduser(username, result) {
    connect.query(
      `SELECT * FROM taikhoan where  taikhoan.TenDangNhap  = '` +
        username +
        "'",
      function (err, data, fields) {
        if (err) {
          result(null);
        } else {
          result(data);
        }
      }
    );
  }

  register(username, password, name, phonenumber, email, result) {
    connect.query(
      "INSERT INTO taikhoan (taikhoan.MaTaiKhoan, taikhoan.TenDangNhap, taikhoan.MatKhau, HoTen, NgaySinh, SDT, Email, CMND, DiaChi, Role) VALUES (NULL, '" +
        username +
        "',  ' " +
        password +
        "',  ' " +
        name +
        "', NULL,  '" +
        phonenumber +
        "',  '" +
        email +
        "', NULL, NULL, '0');",
      function (err, data, fields) {
        if (err) {
          result(null);
        } else {
          result([]);
        }
      }
    );
  }
  updateprofile(
    address,
    password,
    name,
    phonenumber,
    email,
    result,
    identification
  ) {
    connect.query(
      "INSERT INTO taikhoan (taikhoan.MaTaiKhoan, taikhoan.TenDangNhap, taikhoan.MatKhau, HoTen, NgaySinh, SDT, Email, CMND, DiaChi, Role) VALUES (NULL, '" +
        username +
        "',  ' " +
        password +
        "',  ' " +
        name +
        "', NULL,  '" +
        phonenumber +
        "',  '" +
        email +
        "', NULL, NULL, '0');",
      function (err, data, fields) {
        if (err) {
          result(null);
        } else {
          result([]);
        }
      }
    );
  }
}
export default Auth;

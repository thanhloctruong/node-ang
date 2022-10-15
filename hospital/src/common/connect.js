import mysql from "mysql";

var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test2",
});
connect.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
export default connect;

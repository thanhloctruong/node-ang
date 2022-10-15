import jwt from "jsonwebtoken";
export const generateToken = (user) => {
  return jwt.sign(
    {
      idUser: user[0]?.MaTaiKhoan,
      username: user[0]?.TenDangNhap,
      email: user[0]?.Email,
    },
    process.env.JWT_SECRET || "acan",
    {
      expiresIn: "30d",
    }
  );
};
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // 7 is bearer
    jwt.verify(token, process.env.JWT_SECRET || "acan", (err, decode) => {
      if (err) {
        res.status(401).send({ message: "invalid token" });
      } else {
        req.user = decode;
        // console.log(req.user);
        // console.log(decode);
        next();
      }
    });
  } else {
    res
      .status(401)
      .send({ data: null, msgCode: null, message: "permisstion denined" });
  }
};

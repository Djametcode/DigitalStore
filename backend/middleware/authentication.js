const UserModel = require("../model/usermodel");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(501).json({ msg: "User tidak punya izin" });
  }

  const token = header.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);

    req.UserModel = { userId: payload.userId, username: payload.username };
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;

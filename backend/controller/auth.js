const UserModel = require("../model/usermodel");

const register = async (req, res) => {
  try {
    const data = await UserModel.create({ ...req.body });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await UserModel.find({});
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(501).json({ msg: "Please fill data" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(501).json({ msg: "User not found" });
    }

    const isPassCorrect = await user.comparePass(password);
    if (!isPassCorrect) {
      return res.status(501).json({ msg: "Wrong password" });
    }

    const token = await user.createJWT();
    return res
      .status(200)
      .json({ user: { name: user.username, email: user.email }, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, getAllUser, login };

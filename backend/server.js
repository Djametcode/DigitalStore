require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// package
const connectDB = require("./db/connectDB");
const authRouter = require("./routes/authroutes");
const productRouter = require("./routes/product");
const auth = require("./middleware/authentication");
//app use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v5/auth", authRouter);
app.use("/api/v5/", auth, productRouter);
// connect DB
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();

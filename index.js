const express = require("express");
const cors =  require('cors')
const { connection } = require("./config/db");
const { UserModel } = require("./models/UserModel");
const { userRouter } = require("./routes/user.route");


require("dotenv").config();

const app = express();
app.use(cors())


app.use(express.json()); 

app.use('/', userRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connection to DB successfully");
  } catch (error) {
    console.log("Error connecting to DB");
    console.log(error);
  }

  console.log("Listening Port 3001");
});
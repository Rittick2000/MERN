const express = require("express");
const app = express();
const connectDB=require('./db');

const PORT = 3000;
app.use(express.json());



app.get("/", (req, res) => {
  console.log("i am inside home page router");
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("App is running");
  connectDB();
});

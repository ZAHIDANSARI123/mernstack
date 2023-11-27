const express = require("express");
const connectiontoDB = require("./config/connectiontodDB");
const UserModel = require("./models/userModel");
const UserRoute = require("./routes/UserRoute");
require("dotenv").config()

const app = express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).send({msg:"Server has been setup",data:"Exicited"})
})

app.use("/user",UserRoute)  // UserRoute

// connection to db
connectiontoDB()
app.listen(8080, ()=>{
console.log("Server has started Successfully")
})
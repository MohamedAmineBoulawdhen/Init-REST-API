const express = require ("express");
const app =express();

//load environement variables from .env file into the process.env object 
require("dotenv").config()
const PORT = process.env.PORT || 5000;


app.use(express.json());

//connect to database
// const connect=require("./config/connectdb");
// connect();
require("./config/connectdb");

// app.get("/", (req, res) =>{
//     res.end("yoooooooooy")
// })

app.listen(PORT,(err)=>{
err?console.log(err):
    console.log(`listening on http://localhost:${PORT}`);
})

//import routes 
app.use("/api", require("./routes/userRoutes"))
const express= require("express");
const dotenv = require("dotenv").config();
const dbConnect = require('./config/dbConnect');
const authRoutes =require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dbConnect();

const app = express();

//middleware
app.use(express.json());
app.use("/api/users",userRoutes)

//routes
app.use('/api/auth',authRoutes)
//start server
const PORT = process.env.PORT || 7002;
app.listen(PORT, ()=> {
    console.log(`server is running at port ${PORT}`);
})
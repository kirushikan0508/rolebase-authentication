const express = require("express");

const router = express.Router();

//only admin can access this router
router.get("/admin", (req,res) =>{
    res.json({ message:"welcome admin"});
});
//both admin and manager can access this router
router.get("/manager", (req,res) =>{
    res.json({ message:"welcome admin"});
});
//all can access this router
router.get("/user", (req,res) =>{
    res.json({ message:"welcome admin"});
});

module.exports =router;
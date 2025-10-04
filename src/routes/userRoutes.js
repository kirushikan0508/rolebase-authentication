const express = require("express");
const verifyToken = require("../middlewares/authMiddleware.js");
const authorizedRoles = require("../middlewares/roleMiddleware.js")
const router = express.Router();

// Only admin can access
router.get("/admin", verifyToken, authorizedRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin" });
});

// Admin and manager can access
router.get("/manager", verifyToken, authorizedRoles("admin", "manager"), (req, res) => {
    res.json({ message: "Welcome Manager/Admin" });
});

// All roles can access
router.get("/user", verifyToken, authorizedRoles("admin", "manager", "user"), (req, res) => {
    res.json({ message: "Welcome User" });
});

module.exports = router;

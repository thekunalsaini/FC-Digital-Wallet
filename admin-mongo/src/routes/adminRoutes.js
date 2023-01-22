const express = require("express");
const { signup, signin } = require("../controllers/adminController");
const adminRouter = express.Router();
const auth = require("../middlewares/auth");

adminRouter.post("/signup", auth , signup);//admin can create other admin not any one
adminRouter.post("/signin", signin);

module.exports = adminRouter;
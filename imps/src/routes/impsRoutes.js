const express = require("express");
const { createimps,
    deleteimps,
    getimps,
    getall } = require("../controllers/impsController");
const impsRouter = express.Router();

const auth = require("../middlewares/auth");

const adminauth = require("../middlewares/adminauth");
impsRouter.post("/impstransfer",auth,createimps);

impsRouter.delete("/admin/impstransfer/:id", adminauth ,deleteimps);

impsRouter.get("/admin/history", adminauth ,getall);

impsRouter.get("/impstransfer/:id", auth ,getimps);

module.exports = impsRouter;
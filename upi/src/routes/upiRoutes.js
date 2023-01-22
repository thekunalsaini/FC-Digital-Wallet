const express = require("express");
const { createupi,
    deleteupi,
    getupi,
    getall,
    updateupi } = require("../controllers/upiController");
const upiRouter = express.Router();
const auth = require("../middlewares/auth");

const adminauth = require("../middlewares/adminauth");
upiRouter.post("/upitransfer",auth,createupi);

upiRouter.delete("/admin/upitransfer/:id", adminauth ,deleteupi);

upiRouter.get("/admin/history", adminauth ,getall);

upiRouter.get("/upitransfer/:id", auth ,getupi);

// upiRouter.put("/upitransfer/:id", auth ,updateupi);

module.exports = upiRouter;

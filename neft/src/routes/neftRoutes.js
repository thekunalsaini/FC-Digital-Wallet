const express = require("express");
const { createneft,
    deleteneft,
    getneft,
    getall } = require("../controllers/neftController");
const neftRouter = express.Router();

const auth = require("../middlewares/auth");

const adminauth = require("../middlewares/adminauth");
neftRouter.post("/nefttransfer",auth,createneft);

neftRouter.delete("/admin/nefttransfer/:id", adminauth ,deleteneft);

neftRouter.get("/admin/history", adminauth ,getall);

neftRouter.get("/nefttransfer/:id", auth ,getneft);

module.exports = neftRouter;
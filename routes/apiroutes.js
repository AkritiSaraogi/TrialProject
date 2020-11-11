const express = require("express");
const router = express.Router();
const t=require("../controllers/test")
console.log("my name is akriti");

router.post('/test1', t.func1)

module.exports = router;

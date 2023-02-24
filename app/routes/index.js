const router = require("express").Router();

router.use("/user", require("./UserRoute.js"));

module.exports = router;

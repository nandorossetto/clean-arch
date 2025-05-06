const router = require("express").Router();
const taskRouter = require("./taskRoute");
const onlineRouter = require("./onlineRouter");
router.use("/", taskRouter);
router.use("/", onlineRouter);
module.exports = router;
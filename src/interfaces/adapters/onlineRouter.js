const router = require("express").Router();
router.route("/").get((req, res) => {
    res.status(200).json({ msg: "App is running" })
});
module.exports = router;
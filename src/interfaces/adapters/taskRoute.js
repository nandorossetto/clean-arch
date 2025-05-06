const router = require("express").Router();
const createTaskController = require("../controllers/createTaskController");
router
    .route("/tasks")
    .post((req, res) => createTaskController.create(req, res));
module.exports = router; 
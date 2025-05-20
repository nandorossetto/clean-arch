const router = require("express").Router();
const createTaskController = require("../controllers/createTaskController");
const getAllTasksController = require("../controllers/getAllTasksController");
const getTaskByIdController = require("../controllers/getTaskByIdController")
router
    .route("/tasks")
    .post((req, res) => createTaskController.create(req, res));
router
    .route("/tasks")
    .get((req, res) => getAllTasksController.get(req, res));
router
    .route("/tasks/:id")
    .get((req, res) => getTaskByIdController.get(req, res));    
module.exports = router; 
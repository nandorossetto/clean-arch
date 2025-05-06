const TaskModel = require("../../entities/Task");
const taskService  = require("../../useCases/taskService");
const createTaskController = {
    create: async(req, res) => {
        try{
            const isDuplicated = await taskService.isDuplicated(req);
            if(isDuplicated){
                return res.status(422).json({ 
                    msg: "Task duplicated"
                });   
            }
            const task = {};
            task.title = req.body.title;
            task.description = req.body.description;
            task.isDone = req.body.isDone;
            const response = await TaskModel.create(task);
            return res.status(201).json({response, 
                msg: "Created task"
            });
        }catch(error){
            console.log(error);
        }
    }
}
module.exports = createTaskController;
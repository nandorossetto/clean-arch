const TaskModel = require("../../entities/Task");
const getAllTasksController = {
    get: async(req, res) => {
        try{
            const tasks = await TaskModel.find();
            res.status(200).json(tasks);
        }catch(error){
            console.log(error);
        }
    }
};
module.exports = getAllTasksController;
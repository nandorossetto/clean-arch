const TaskModel = require("../entities/Task");
const taskService = {
    isDuplicated: async(req) => {
        if(req.body){
            const isDuplicated = await TaskModel.find({
                title: req.body.title
            });
            if(isDuplicated.length){
                return true;
            };
        };
        return false;
    }
};
module.exports = taskService;
const TaskModel = require("../entities/Task");
const taskService = {
    exists: async(id) => {
        const taskById = await TaskModel.findById(id).then(param => {
            console.log(param);
            return param;
        })
        .catch(error => {
            console.error(error);
            return false;
        });
        return taskById;
    }
};
module.exports = taskService;
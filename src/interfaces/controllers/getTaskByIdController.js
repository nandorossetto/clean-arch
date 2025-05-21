const taskService = require("../../useCases/existsTaskService");
const getTaskByIdController = {
    get: async(req, res) => {
        const id = req.params.id;
        try{
            const exists = await taskService.exists(id);
            if(exists){
                return res.status(200).json(exists);
            }
            return res.status(404).json({msg: "Task not found!"});
        }catch(error){
            console.log(error);
        }
    }
};
module.exports = getTaskByIdController;
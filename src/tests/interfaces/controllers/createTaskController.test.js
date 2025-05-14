const createTaskController = require("../../../interfaces/controllers/createTaskController");
jest.mock("../../../interfaces/controllers/createTaskController", () => ({
    create: jest.fn().mockResolvedValue({ 
        req: {
            body: {
                title: "Task #01",
                description: "",
                isDone: false
            }
        }
    })
}));
describe("Should test create task controller", () => {
    it("Validate req fileds", async () => {
        const req = {
            body: {
                title: "Task #01",
                description: "",
                isDone: false
            }
        };
        await createTaskController.create(req, res);
    });
});
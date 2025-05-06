const service = require("../../useCases/taskService")
jest.mock("../../../src/useCases/taskService", () => ({
    isDuplicated: jest.fn().mockResolvedValue({ 
        req: {
            body: {
                title: "Task #01"
            }
        }
    })
}));
describe('Should test if has items', () => {
    it("Mock isDuplicated fn", async () => {
        const req = {
            body: {
                title: "Task #01"
            }
        };
        service.isDuplicated.mockResolvedValueOnce({ 
            req: {
                body: {
                    title: "Task #01"
                }
            }
        })
        const data = await service.isDuplicated(req);
        expect(data).toEqual({ 
            req: {
                body: {
                    title: "Task #01"
                }
            }
        });
    });
});
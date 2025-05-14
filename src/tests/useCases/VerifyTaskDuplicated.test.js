const verifyTaskDuplicated = require("../../useCases/verifyTaskDuplicated")
jest.mock("../../../src/useCases/VerifyTaskDuplicated", () => ({
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
        verifyTaskDuplicated.isDuplicated.mockResolvedValueOnce({ 
            req: {
                body: {
                    title: "Task #01"
                }
            }
        })
        const data = await verifyTaskDuplicated.isDuplicated(req);
        expect(data).toEqual({ 
            req: {
                body: {
                    title: "Task #01"
                }
            }
        });
    });
});
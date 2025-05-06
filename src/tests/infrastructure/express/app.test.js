const request = require("supertest");
const app = require("../../../infrastructure/frameworks/express/server"); 
describe("GET /", () => {
    it("should return a 200 status code", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
    });
});
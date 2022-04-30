const Reader = require("../../../lib/utils/Reader");

describe("Unit Tests for reader class", () => {
    test('1) Parse students.json', () => {
        const students = new Reader
        expect(students.readJsonPath("./students.json").length).toBe(51)
    })
})
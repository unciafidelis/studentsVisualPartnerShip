const Reader = require("../../../lib/utils/Reader");

describe("Unit Tests for reader class", () => {
    test('Requerimiento 1: Mostrar todos los estudiantes de todos los campos', () => {
        const students = new Reader
        expect(students.readJsonPath("./students.json").length).toBe(51)
    })
})
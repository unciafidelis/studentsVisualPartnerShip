const StudentController = require("../../../lib/controllers/StudentController");
let SC = new StudentController

describe("Student Controller Unit Test", () => {
    test('Requerimiento 1: Mostrar todos los estudiantes de todos los campos', () => {
        expect(SC.getAllStudents().length).toBe(51)
    })
    test('Requerimiento 2: Consultar todos los estudiantes que tengan haveCertification = true', () => {
        expect(SC.getStudentsWithCertification(true).length).toBe(29)
    })
    test('Requerimiento 3: Consultar todos los estudiantes que tengan credits mayor a 500', () => {
        expect(SC.getAllStudentsWithCredits(500).length).toBe(27)
    })

})
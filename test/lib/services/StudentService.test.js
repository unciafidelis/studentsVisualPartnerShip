const Reader = require("../../../lib/utils/Reader");
const StudentService = require("../../../lib/services/StudentService");
const students = new Reader
const SS = new StudentService
describe("StudentService Unit Tests", () => {
    test('Requerimiento 2: Consultar todos los estudiantes que tengan haveCertification = true', () => {
        const studentsService = students.readJsonPath("./students.json")
        expect(SS.studentsWithCertification(studentsService, true).length).toBe(29)
    })
    test('Requerimiento 3: Consultar todos los estudiantes que tengan credits mayor a 500', () => {
        const studentsService = students.readJsonPath("./students.json")
        expect(SS.studentsCredits(studentsService, 500).length).toBe(27)
    })
})
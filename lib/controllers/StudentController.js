const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");
let studentsReader = new Reader;
let studentsServices = new StudentService;

class StudentController {
    getAllStudents(){
        const allStudents = studentsReader.readJsonPath("./students.json")
        return allStudents
    }
    getStudentsEmailsWithCertification(){
        const haveCertification = true
        const allStudents = studentsReader.readJsonPath("./students.json")
        const allStudentsWithCertification = studentsServices.studentsWithCertification(allStudents, haveCertification);
        const allStudentsEmailsWithCentification = allStudentsWithCertification.map(student => student.email);
        return allStudentsEmailsWithCentification
    }
    getAllStudentsWithCredits(){
        const allStudents = studentsReader.readJsonPath("./students.json")
        const allStudentsWithCredits = studentsServices.studentsCredits(allStudents, 500)
        return allStudentsWithCredits
    }
}

module.exports = StudentController
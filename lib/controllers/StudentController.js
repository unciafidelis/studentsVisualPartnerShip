const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");
let studentsReader = new Reader;
let studentsServices = new StudentService;

class StudentController {
    getAllStudents(){
        const allStudents = studentsReader.readJsonPath("./students.json")
        return allStudents
    }
    getStudentsWithCertification(){
        const haveCertification = true
        const allStudents = studentsReader.readJsonPath("./students.json")
        const allStudentsWithCertification = studentsServices.studentsWithCertification(allStudents, haveCertification);
        return allStudentsWithCertification
    }
    getAllStudentsWithCredits(credits){
        if(credits >=500){
            const allStudents = studentsReader.readJsonPath("./students.json")
            const allStudentsWithCredits = studentsServices.studentsCredits(allStudents, credits);
            return allStudentsWithCredits
        }
        else{
            return alert("Los estudiantes no tienen los créditos suficientes")
        }
    }
}

module.exports = StudentController
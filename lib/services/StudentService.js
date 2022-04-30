class StudentService{
    studentsWithCertification(students, haveCertification){
        const studentsWithCertification = students.filter(student => student.haveCertification === haveCertification);
        if(haveCertification === true){
            return studentsWithCertification
        }
        else{
            return studentsWithCertification
        }
    }
    studentsCredits(students, credits){
        const allStudentsCredits = students.filter((student) => student.credits >= credits).map((student) => student);
        return allStudentsCredits
    }

}
module.exports = StudentService
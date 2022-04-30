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
        const studentsWithCredits = students.filter(student => student.credits >= credits);
        if(credits >= 500){
            return studentsWithCredits
        }
        else{
            return studentsWithCredits
        }
    }
}
module.exports = StudentService
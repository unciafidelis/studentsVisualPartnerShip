const StudentController = require("./controllers/StudentController");
SC = new StudentController
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/students", (request, response) => {
    const students = SC.getAllStudents();
    response.json(students);
});

app.get("/v1/students/certification", (request, response) => {
    const students = SC.getStudentsEmailsWithCertification();
    response.json(students);
});

app.get("/v1/students/credits", (request, response) => {
    const credits = request.params.credits;
    const students = SC.getAllStudentsWithCredits();
    response.json(students);
});

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});
class Reader{

    readJsonPath(filePath){
        const fs = require("fs");
        const rawdata = fs.readFileSync(filePath);
        const students = JSON.parse(rawdata);
        return students;
    }
    
}
module.exports = Reader;
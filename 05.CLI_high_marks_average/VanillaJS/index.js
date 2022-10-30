var readlineSync = require('readline-sync')
var maxMarks = 0;
var studentName = ""

for (var i = 0; i < 5; i++) {
    var nameOfStudent = readlineSync.question("what is student's name?")
    var unitMarks = Number(readlineSync.question("unitTest marks?"))
    var preFinalMarks = Number(readlineSync.question("pre final marks?"))
    var finalMarks = Number(readlineSync.question(" final marks?"))
    var totalMarks = unitMarks + preFinalMarks + finalMarks
    console.log(totalMarks)
    if (totalMarks > maxMarks) {
        maxMarks = totalMarks
        studentName = nameOfStudent
    }
}
console.log("name of student " + studentName + "with highest marks" + maxMarks)
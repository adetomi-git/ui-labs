let studentName = "Joy";
let testScore = 15;
let assignmentScore = 15;
let examScore = 39;

let finalScore = testScore + assignmentScore + examScore;

let grade;
let status;
let feedback;

function calculateGrade() {

    if (finalScore >= 70) {
        grade = "A";
    } else if (finalScore >= 60) {
        grade = "B";
    } else if (finalScore >= 50) {
        grade = "C";
    } else if (finalScore >= 45) {
        grade = "D";
    } else if (finalScore >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    if (finalScore >= 40) {
        status = "Passed";
    } else {
        status = "Failed";
    }

    if (finalScore >= 80) {
        feedback = "Excellent work";
    } else if (finalScore >= 50) {
        feedback = "Good effort, but you can do better.";
    } else {
        feedback = "You need to work harder.";
    }

    console.log("Student:", studentName);
    console.log("Score:", finalScore);
    console.log("Grade:", grade);
    console.log("Status:", status);
    console.log("Feedback:", feedback);
}

calculateGrade();
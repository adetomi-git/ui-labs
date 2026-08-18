let students = [
    {
        name: "Chika",
        testScore: 5,
        assignmentScore: 5,
        examScore: 29
    },

    {
        name: "Tobi",
        testScore: 15,
        assignmentScore: 18,
        examScore: 50
    },

    {
        name: "Aisha",
        testScore: 10,
        assignmentScore: 10,
        examScore: 25
    },

    {
        name: "Daniel",
        testScore: 12,
        assignmentScore: 13,
        examScore: 44
    },

    {
        name: "Miriam",
        testScore: 14,
        assignmentScore: 15,
        examScore: 40
    },

    {
        name: "Samuel",
        testScore: 8,
        assignmentScore: 8,
        examScore: 39
    },

    {
        name: "Esther",
        testScore: 10,
        assignmentScore: 10,
        examScore: 30
    },

    {
        name: "Favour",
        testScore: 13,
        assignmentScore: 14,
        examScore: 33
    },

    {
        name: "Michael",
        testScore: 15,
        assignmentScore: 15,
        examScore: 40
    },

    {
        name: "Zealot",
        testScore: 7,
        assignmentScore: 8,
        examScore: 40
    },

    {
        name: "David",
        testScore: 12,
        assignmentScore: 12,
        examScore: 36
    },

    {
        name: "Blessing",
        testScore: 16,
        assignmentScore: 17,
        examScore: 37
    },

    {
        name: "Joshua",
        testScore: 8,
        assignmentScore: 9,
        examScore: 43
    },

    {
        name: "Precious",
        testScore: 17,
        assignmentScore: 18,
        examScore: 35
    },

    {
        name: "Luke",
        testScore: 11,
        assignmentScore: 10,
        examScore: 28
    }
];


function calculateGrade(finalScore) {

    if (finalScore >= 70) {
        return "A";
    }

    else if (finalScore >= 60) {
        return "B";
    }

    else if (finalScore >= 50) {
        return "C";
    }

    else if (finalScore >= 45) {
        return "D";
    }

    else if (finalScore >= 40) {
        return "E";
    }

    else {
        return "F";
    }
}


for (let student of students) {

    let finalScore =
        student.testScore +
        student.assignmentScore +
        student.examScore;


    let grade = calculateGrade(finalScore);


    let status;

    if (finalScore >= 40) {
        status = "Passed";
    } else {
        status = "Failed";
    }


    let feedback;

    if (finalScore >= 80) {
        feedback = "Excellent work! Keep up the great performance.";
    }

    else if (finalScore >= 70) {
        feedback = "Great job! You are doing very well.";
    }

    else if (finalScore >= 60) {
        feedback = "Good work! Keep building on your progress.";
    }

    else if (finalScore >= 50) {
        feedback = "Nice effort! Keep practicing and you can achieve even more.";
    }

    else if (finalScore >= 40) {
        feedback = "You're making progress! Keep learning and improving.";
    }

    else {
        feedback = "Don't give up! Keep practicing and you will improve.";
    }


    console.log("Student:", student.name);
    console.log("Score:", finalScore);
    console.log("Grade:", grade);
    console.log("Status:", status);
    console.log("Feedback:", feedback);


    document.write(
    "<tr>" +
        "<td>" + student.name + "</td>" +
        "<td>" + student.testScore + "</td>" +
        "<td>" + student.assignmentScore + "</td>" +
        "<td>" + student.examScore + "</td>" +
        "<td>" + finalScore + "</td>" +
        "<td>" + grade + "</td>" +
        "<td>" + status + "</td>" +
        "<td>" + feedback + "</td>" +
    "</tr>"
    );
}
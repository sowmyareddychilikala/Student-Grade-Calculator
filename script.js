// ===============================
// Student Grade Calculator
// ===============================

// Buttons
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

// Student Details
const studentName = document.getElementById("studentName");
const rollNumber = document.getElementById("rollNumber");

// Subject Marks
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const sub3 = document.getElementById("sub3");
const sub4 = document.getElementById("sub4");
const sub5 = document.getElementById("sub5");

// Result Elements
const totalMarks = document.getElementById("totalMarks");
const averageMarks = document.getElementById("averageMarks");
const percentage = document.getElementById("percentage");
const grade = document.getElementById("grade");
const status = document.getElementById("status");

// ===============================
// Calculate Button
// ===============================

calculateBtn.addEventListener("click", function () {

    // Validate Name
    if (studentName.value.trim() === "") {
        alert("Please enter Student Name.");
        studentName.focus();
        return;
    }

    // Validate Roll Number
    if (rollNumber.value.trim() === "") {
        alert("Please enter Roll Number.");
        rollNumber.focus();
        return;
    }

    // Get Marks
    const marks = [
        Number(sub1.value),
        Number(sub2.value),
        Number(sub3.value),
        Number(sub4.value),
        Number(sub5.value)
    ];

    // Check Empty Fields
    for (let i = 0; i < marks.length; i++) {

        if (
            isNaN(marks[i]) ||
            marks[i] < 0 ||
            marks[i] > 100
        ) {
            alert("Please enter valid marks between 0 and 100 for all subjects.");
            return;
        }

    }

    // Calculate Total
    const total = marks.reduce((sum, mark) => sum + mark, 0);

    // Calculate Average
    const average = total / marks.length;

    // Percentage
    const percent = (total / 500) * 100;

    // Grade
    let finalGrade = "";

    if (percent >= 90)
        finalGrade = "A+";
    else if (percent >= 80)
        finalGrade = "A";
    else if (percent >= 70)
        finalGrade = "B+";
    else if (percent >= 60)
        finalGrade = "B";
    else if (percent >= 50)
        finalGrade = "C";
    else if (percent >= 40)
        finalGrade = "D";
    else
        finalGrade = "F";

    // Pass or Fail
    const pass = marks.every(mark => mark >= 35);

    // Display Result
    totalMarks.textContent = total + " / 500";
    averageMarks.textContent = average.toFixed(2);
    percentage.textContent = percent.toFixed(2) + "%";
    grade.textContent = finalGrade;

    if (pass) {
        status.textContent = "PASS";
        status.style.color = "green";
    } else {
        status.textContent = "FAIL";
        status.style.color = "red";
    }

});


// ===============================
// Reset Button
// ===============================

resetBtn.addEventListener("click", function () {

    studentName.value = "";
    rollNumber.value = "";

    sub1.value = "";
    sub2.value = "";
    sub3.value = "";
    sub4.value = "";
    sub5.value = "";

    totalMarks.textContent = "-";
    averageMarks.textContent = "-";
    percentage.textContent = "-";
    grade.textContent = "-";

    status.textContent = "-";
    status.style.color = "#2563eb";

});
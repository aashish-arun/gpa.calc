let grade_1 = document.getElementById(grade-1)
let grade_2 = document.getElementById(grade-2)
let grade_3 = document.getElementById(grade-3)
let grade_4 = document.getElementById(grade-4)
let grade_5 = document.getElementById(grade-5)

function termGpa(grade_1,grade_2,grade_3,grade_4,grade_5) {
    var calc_grade = (grade_1 + grade_2 + grade_3 + grade_4 + grade_5) / 5
    document.getElementById("total-grade").innerHTML = `Term GPA ${calc_grade}`;
}
let grade_1 = document.getElementById(grade-1)
let grade_2 = document.getElementById(grade-2)
let grade_3 = document.getElementById(grade-3)
let grade_4 = document.getElementById(grade-4)
let grade_5 = document.getElementById(grade-5)
let total_grade = document.getElementById(total-grade)

function termGpa(grade_1,grade_2,grade_3,grade_4,grade_5,total_grade) {
    var calc_grade = (grade_1 + grade_2 + grade_3 + grade_4 + grade_5) / 5
    total_grade = `Term GPA ${calcGrade}`
}



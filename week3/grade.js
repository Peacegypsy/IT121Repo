const students_grades = [
  { name: "Harry", grade: 90 },
  { name: "Hermione", grade: 100 },
  { name: "Ron", grade: 70 },
  { name: "Luna", grade: 80 },
  { name: "Neville", grade: 85 },
  { name: "Draco", grade: 60 },
  { name: "William", grade: 55 },
];
function show_student_grade(students_grades) {
  let student_list = "";
  for(const student in students_grades){
    student_list += `${student.name} - ${student.grade}`;

  }return student_list;
}
var gradesButton = document.getElementById("get-grades");
gradesButton.onclick = function () {
  document.getElementById("student-name-grade").innerHTML = show_student_grade(students_grades);
};

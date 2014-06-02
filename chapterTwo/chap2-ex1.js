// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

var grades = [99,80,75,91];

function add (grade) {
  grades.push(grade);
};

function gradesAvg () {
  var total;
  for ( var i = 0; i < grades.length; i++) {
    total += grades[i];
}
  return grades / grades.length

}

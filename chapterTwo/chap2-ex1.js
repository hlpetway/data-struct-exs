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

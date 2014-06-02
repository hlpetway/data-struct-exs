// make this store a month's worth of data as a two dimensional array.
// display the monthly average, a weeks average and all weeks averages.

var monthTemps = [[78, 80, 81, 69, 75, 78, 77], [90, 81, 78, 70, 75, 78, 79], [75, 78, 79, 80, 81, 80, 80], [81, 80, 80, 79, 80, 79, 81] ];
var temp = 0;
var averageTemp = 0.0;
var monthAvg = 0.0;

for (var row = 0; row < monthTemps.length; ++row) {
  for (var col = 0; col < grades [row].length; ++col) {
    temp += monthTemps[row][col];
  }

  averageTemp = total / monthTemps[row].length;
  console.log("Week " + parseInt(row + 1) + " average: " + averageTemp.toFixed(2));

  monthAvg += averageTemp;

  total = 0;
  average = 0.0;
}

console.log(monthAvg);

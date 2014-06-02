// an object that stores an individual letters in an array
// and has a function for displaying the letters as a single word

function concat(word, letter) {
  return word + letter;
}

var letters = ["H", "a", "i", "l", "e", "y"];
var word = letters.reduce(concat);
console.log(word);

//"Hailey"

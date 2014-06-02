// Store a set of words in an array and display the contents both forward and backward.

function printForward () {
  function concat (finalString, string) {
    return finalString + string;
  }

  var words = ["Hi", "Meow", "Mer"];
  var sentence = words.reduce(concat);

  console.log(sentence);
  //"Hi Meow Mer"

};

function printBackward () {
  function concat (finalString, string) {
    return finalString + string;
  }

  var words = ["Fella", "Up", "What's"];
  var sentence = words.reduceRight(concat);
  console.log(sentence);
  //"What's Up Fella"
};


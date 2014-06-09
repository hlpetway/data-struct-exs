// Write a program that stores the words from a large text file in a BST and displays
// the number of times each word occurs in the text.

function Node(data, left, right) {
  this.data = data;
  this.count =
  1;
  this.left = left;
  this.right = right;
  this.show = show;
}

function genArray(text) {
  var counter = 0;
  var arrayOfWords = text.split(" ").sort(); //if we use sort we need a compare function
  for (var i = 0; i < arrayOfWords.length; ++i) {
    counter += 1;
  }

}


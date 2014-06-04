// A stack can be used to ensure that an arithmetic expression has balanced paren‐
// theses. Write a function that takes an arithmetic expression as an argument and
// returns the postion in the expression where a parenthesis is missing. An example
// of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
// * .24.

'use strict';

var parenFinder = function () {
  var parens = [];
  var expression = process.argv[2];
  var isOK = true;

  for(var i = 0; i < expression.length; i++){
    if (expression[i] === '('){
      parens.push(i);
    }
    if (expression[i] === ')'){
      if (parens.pop() === undefined){
        console.log('Found unmatched ")" at index ' + i);
        isOK = false;
      }
    }
  }
  while (parens.length > 0){
    console.log('Found unmatched "(" at index ' + parens.pop());
    isOK = false;
  }
  if (isOK){
    console.log('No unmatched parentheses');
  }
};
parenFinder();
// when you run this with node exOne.js "2)(5+3"
// will find two un-matched parens

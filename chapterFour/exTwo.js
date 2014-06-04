// A postfix expression evaluator works on arithmetic expressions taking the following
// form:
// op1 op2 operator
// Using two stacks—one for the operands and one for the operators—design and
// implement a JavaScript function that converts infix expressions to postfix expres‐
// sions, and then use the stacks to evaluate the expression.

//Infix Notation

'use strict'
function PostFixExpression (operand1, operand2, operator) {
    this.operand1 = operand1;
    this.operand2 = operand2;
    this.operator = operator;
}

PostFixExpression.prototype.inspect = function() {
  return this.operand1 + ' ' + this.operand2 + ' ' + this.operator;
};

// can split on spaces and put it into an array
// example " 2 + 2"

PostFixExpression.prototype.parseInfix = function (string) {
  var infixArray = string.split(' ');
  this.operand1 = infixArray[0];
  this.operand2 = infixArray[2];
  this.operator = infixArray[1];
};
var postFix = new PostFixExpression();
  postFix.parseInfix("2 + 3");

console.log(postFix.inspect());
// returns 2 3 +

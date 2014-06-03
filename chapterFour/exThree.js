// An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
// dispenser is filled with red, yellow, and white colors and you don’t like the yellow
// ones. Write a program that uses a stack (and maybe more than one) to remove the
// yellow ones without changing the order of the other candies in the dispenser.

function yellowRemover (stack) {
  var yellows = new Stack();
  var goodPez = new Stack();
  for(var i = 0; i < stack.length; i++) {
    if ((this.dataStore)[this.top-1] === "yellow") {
      yelows.push(stack[i]);
    } else {
      goodPez.push(stack[i]);
    }
  } return goodPez;
};

var pezDispenser = new Stack();
pezDispenser.push("red");
pezDispenser.push("yellow");
pezDispenser.push("white");
pezDispenser.push("yellow");
pezDispenser.push("red");
pezDispenser.push("white");

yellowRemover(pezDispenser);


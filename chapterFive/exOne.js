// Modify the Queue class to create a Deque class. A deque is a queue-like structure
// that allows elements to be added and removed from both the front and the back of
// the list. Test your class in a program.

function Deque() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.frontdequeue = frontdequeue;
  this.backdequeue = backdequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;

}

function enqueue(element) {
  this.dataStore.push(element);
}
function frontdequeue() {
  return this.dataStore.shift();
}
function backdequeue() {
  return this.dataStore.pop();
}
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length-1];
}
function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}
function empty() {
  if (this.dataStore.length == 0) {
    return true;
  }
  else {
    return false;
  }
}


//Testing the Class

var q = new Deque();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");

console.log(q.toString());

q.frontdequeue();
q.backdequeue();

console.log(q.toString());

q.enqueue("Hilary");

console.log(q.toString());

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

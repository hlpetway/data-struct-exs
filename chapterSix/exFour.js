// Write a program that uses a singly linked list to keep track of a set of test grades
// entered interactively into the program.
function Node(element) {
  this.element = element;
  this.next = null;
}
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.advance = advance;
}
function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}
function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) &&
    (currNode.next.element != item)) {
    currNode = currNode.next;
}
return currNode;
}
function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
function advance(n, item) {
  var currNode = this.head;
  while (currNode.element != item) {
      currNode = currNode.next;
  }
  for (var i = 0; i < n; i++) {
    currNode = currNode.next;
  }
  console.log(currNode.element);
}
var grades = new LList();
grades.insert("Test 1: 86", "head");
grades.insert("Test 2: 87", "Test 1: 86");
grades.insert("Test 3: 100", "Test 2: 87");
grades.insert("Test 4: 99", "Test 3: 100");
console.log("These are all our tests and grades so far:\n")
grades.display();
console.log("\nShow Me Our Third Test:\n")
grades.advance(2, "Test 1: 86");

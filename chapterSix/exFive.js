// Rewrite your solution to Ex 6-4 using a doubly linked list.

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}
function findLast() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}
function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}
function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    print(currNode.next.element);
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
  newNode.previous = current;
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

// Implement the back(n) function so that when executed, the current node is moved
// n spaces backward in the list.

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
  this.advance = advance;
  this.back = back;
  this.dispReverse = dispReverse;
}
function dispReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while (!(currNode.previous == null)) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
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
function back(n, item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  for(var i = 0; i < n; i++) {
    currNode = currNode.previous;
  }
  console.log(currNode.element);
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.insert("Seattle", "Alma");
cities.insert("Portland", "Seattle");

console.log("Here are all our nodes: \n ");
cities.display();
console.log("\nHere we move back 2 nodes from Seattle: \n ");
cities.back(2, "Seattle");

// Implement the show() function, which displays the data associated with the current
// node.

// Implement the back(n) function so that when executed, the current node is moved
// n spaces backward in the list.
'use strict';

function Node(element) {
  this.element = element;
  this.next = null;
}
function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.advance = advance;
  this.back = back;
  this.show = show;
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
function back(n, item) {
  for( var i = 0; i < n; i++) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
      (currNode.next.element != item)) {
      currNode = currNode.next;
    }
  }
}
function show(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  console.log(currNode.element);
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.show("Alma");

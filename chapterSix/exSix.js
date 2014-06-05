// Write a program that allows you to place n
// people in a circle and specify that every mth person will be removed. The program
// should determine the number of the last two people left in the circle. Use a circularly
// linked list to solve the problem.
'use strict';

function Node(element) {
  this.element = element;
  this.next = null;
}
function LList() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findThird = findThird;
  this.remove = remove;
  this.advance = advance;
}
function remove() {
  var prevNode = this.findThird();
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}
function findThird() {
  var currNode = this.head;
  for(var i = 0; i < 3; i++){
  while (!(currNode.next == null)){
    currNode = currNode.next;
}
}
return currNode;
}
function display() {
  var currNode = this.head;
  while (!(currNode.next == null) &&
         !(currNode.next.element == 'head')) {
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
var people = new LList();
people.insert("Bob", "head");
people.insert("Patrick", "Bob");
people.insert("Carlisle", "Parick");
people.insert("Russel", "Carlisle");
people.display();
// people.remove();
// people.display();

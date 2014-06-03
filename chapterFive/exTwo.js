// Use the Deque class you created in Example 5-1 to determine if a given word is a
// palindrome.

function Deque() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.frontdequeue = frontdequeue;
  this.backdequeue = backdequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.length = length;

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
function length() {
  return this.dataStore.length;
}

function isPalindrome(word){
  var s = new Deque();
  for (var i = 0; i < word.length; ++i) {
    s.enqueue(word[i]);
  }
  var rword = "";
  while (s.length() > 0) {
    rword += s.backdequeue();
  }
  if(word === rword) {
    return true;
  }
  else {
    return false;
  }
}

var word = "otto";
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
}
else {
  console.log(word + " is not a palindrome.");
}

// Modify the priority queue example from Example 5-5 so that the higher-priority
// elements have higher numbers rather than lower numbers. Test your implementa‐
// tion with the example in the chapter.

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function Patient(name, code) {
  this.name = name;
  this.code = code;
}
function enqueue(element) {
  this.dataStore.push(element);
}
function dequeue() {
  var priority = this.dataStore[0].code;
  for (var i = 1; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code < priority) {
      priority = i;
    }
  }
  return this.dataStore.splice(priority,1);
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
    retStr += this.dataStore[i].name + " code: "
    + this.dataStore[i].code + "\n";
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

//creating a patient list
var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);

//print the patient list
console.log(ed.toString());

//creating a seen patient list
var seen = ed.dequeue();

//print seen & waiting patient lists
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

// another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

// Modify the ED example (Example 5-5) so the user can control the activity in the
// ED. Create a menu system that allows the user to choose from the following activ‐
// ities:
// a. Patient enters ED.
// b. Patient is seen by doctor.
// c. Display list of patients waiting to be seen.

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.announceNewPatient = function () {
    console.log("New Patient in the ER:");
  this.announceNextPatient =  function () {
    console.log("Is now in with the Doctor.");
  }
  }
}

function Patient(name, code) {
  this.name = name;
  this.code = code;

}
function enqueue(element, patient) {
  this.dataStore.push(element);
  this.announceNewPatient();
}
function dequeue() {
  this.announceNextPatient();
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
console.log(p.name);
p = new Patient("Jones", 4);
ed.enqueue(p);
console.log(p.name);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
console.log(p.name);
p = new Patient("Brown", 1);
ed.enqueue(p);
console.log(p.name);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(p.name);

console.log("\n" + "Patients waiting: ")
console.log(ed.toString());

console.log(p.name);
ed.dequeue(p);


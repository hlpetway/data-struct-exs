// Create a Person class that stores a person’s name and their gender. Create a list of
// at least 10 Person objects. Write a function that displays all the people in the list of
// the same gender.

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
};

var persons = new List();

function addPerson(name, gender, persons) {
  var p = new Person(name, gender);
  persons.append(p);
}

addPerson("Bob", "Male", persons);
addPerson("Mary", "Female", persons);
addPerson("Bob", "Male", persons);
addPerson("Barb", "Female", persons);
addPerson("Him", "Male", persons);
addPerson("Hilary", "Female", persons);
addPerson("Bobby", "Male", persons);
addPerson("Mari", "Female", persons);
addPerson("Tom", "Male", persons);
addPerson("Sally", "Female", persons);


function displayFemales(list) {
  for(list.front(); list.currPos() < list.length(); list.next()) {
    if(list.getElement()["gender"] == "Female") {
      console.log(list.getElement()["name"] + ", " +
          list.getElement()["gender"]);
    }
    else {
      console.log(list.getElement());
    }
  }
}

function displayMales(list) {
  for(list.front(); list.currPos() < list.length(); list.next()) {
    if(list.getElement()["gender"] == "Male") {
      console.log(list.getElement()["name"] + ", " +
          list.getElement()["gender"]);
    }
    else {
      console.log(list.getElement());
    }
  }
}

displayMales(persons);
displayFemales(persons);

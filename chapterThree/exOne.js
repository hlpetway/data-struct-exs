// Write a function that inserts an element into a list only if the element to be inserted
// is larger than any of the elements currently in the list. Larger can mean either greater
// than when working with numeric values, or further down in the alphabet, when
// working with textual values.

var newItem = 0;
var list = new List();

for(var i = 0; i < list.length; ++i) {
  if (newItem > this.dataStore[i]) {
    list.append(newItem);
  }
  return false;
}

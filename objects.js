//create an object person
const person = {
  firstName: "Abel",
  lastName: "Soi",
  age: 23,
};
document.getElementById("objects").innerHTML =
  person.firstName +
  " " +
  person.lastName +
  " is " +
  person.age +
  " years old.";
document.getElementById(
  "object1"
).innerHTML = `${person.firstName} ${person.lastName} is ${person.age} years old.`;

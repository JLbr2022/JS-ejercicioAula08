/*
 * JavaScript program which ask for a person data and shows the oldest person in the list.
 * Using statements:
 * import/export
 * functions, arrow functions
 * Constructor Function,
 * console.table(),
 * console.log()
 * alert(),
 * prompt(),
 * for and while loops,
 * array, sort(),
 * if/else statments,
 * objects to store all the data person.
 */

// Importing functions from functions.js file

import {
  PersonRegister,
  showData,
  calcHighestValue,
  showOldestPerson,
} from "../js/functions.js";

// Declaring variables

var followNext = true;
var continuar = true;
var nName = String;
var nAge = Number;
var i = 0;
var person = [];

while (followNext) {
  // Validating to continue loading regs and call the Constructor Function PersonRegister()
  continuar = confirm("¿Desea agregar otra persona?");

  if (continuar) {
    nName[i] = prompt("Ingrese nombre");
    nAge[i] = Number(prompt("Ingrese edad"));
    person[i] = new PersonRegister(nName[i], nAge[i]);
    i++;
  } else {
    followNext = false;
    break;
  }
}

// Calling function which sort in ascending way and take the last value in the array
let highValue = calcHighestValue(person);

// Arrow function which  calc the oldest persons in the array
const result = person.filter((element) => element.nAge == highValue.nAge);

// Calling function to show array data
showData(person, i);

// Calling function which shows the oldest person in the array
showOldestPerson(highValue, i);

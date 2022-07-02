/*
 * JavaScript program which ask for a person data and shows the oldest person in the list.
 * Using statements:
 * functions,
 * console.table(),
 * alert(),
 * prompt(),
 * for and while loops,
 * array,
 * if/else statments,
 * objects to store all the data person.
 */

// Importing functions from functions.js file
import {
  PersonRegister,
  showData,
  calcOldPerson,
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
  // Validation and loading registers
  continuar = confirm("¿Desea agregar otra persona?");

  if (continuar) {
    nName[i] = prompt("Ingrese nombre");
    nAge[i] = prompt("Ingrese edad");
    person[i] = new PersonRegister(nName[i], nAge[i]);
    i++;
  } else {
    followNext = false;
    break;
  }
}

showData(person, i); // Calling function to show array data
let oldPerson = calcOldPerson(person, i); // Calling function which calc the oldest person in the array
if (i > 0) {
  showOldestPerson(oldPerson); // Calling function which shows the oldest person in the array
}

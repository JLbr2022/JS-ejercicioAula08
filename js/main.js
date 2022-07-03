/*
 * JavaScript program which ask for a person data and shows the oldest person in the list.
 * Using statements:
 * import/export
 * functions,
 * Constructor Function,
 * console.table(),
 * console.log()
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
  // sortByAge,
} from "../js/functions.js";

// Declaring variables

var followNext = true;
var continuar = true;
var nName = String;
var nAge = Number;
var i = 0;
var person = [];

while (followNext) {
  // Validating to continue loading regs and loading registers routing
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

let oldPerson = calcOldPerson(person); // Calling function which calc the oldest person in the array
showData(person, i); // Calling function to show array data

// If any register was entered won't show the oldest person
showOldestPerson(oldPerson, i); // Calling function which shows the oldest person in the array

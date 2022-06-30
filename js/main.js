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

// Importando archivo de funciones
import("./functions.js");

// declaración de variables

var followNext = true;
var continuar = true;
var nName = String;
var nAge = Number;
var i = 0;
var person = [];
var oldPersonTemp = 0;

while (followNext) {
  // Validación y carga de registro de persona
  continuar = confirm("¿Desea agregar otra persona?");

  if (continuar) {
    nName[i] = prompt("Ingrese nombre");
    nAge[i] = prompt("Ingrese edad");
    addDataPerson(nName[i], nAge[i]);
    i++;
  } else {
    followNext = false;
    break;
  }
}

oldPerson(); // llamado de función que calcula la persona con mayor edad
mostrarData(); // llamado de función para personas cargadas en el array
showOldestPerson(oldPersonTemp); // llamado de función que muestra la persona con mayor edad

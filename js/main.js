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

// declaración de variables

var followNext = true;
var continuar = true;
var nName = String;
var nAge = Number;
var i = 0;
var person = [];
var oldPersonTemp = 0;

while (followNext) {
  // Validación: continuación para agregar nuevo registro
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

oldPerson();
mostrarData();
showOldestPerson(oldPersonTemp);

// == [ FUNCIONES ] ==

// Función para cargar datos de persona y agregarlos al objeto persona
function addDataPerson(fName, fAge) {
  person.push({
    name: fName,
    age: fAge,
  });
}

// Función para calcular la persona con mayor edad
function oldPerson() {
  for (let i = 0; i < person.length; i++) {
    if (person[i].age > oldPersonTemp) {
      oldPersonTemp = person[i];
    }
  }
  return oldPersonTemp;
}

// Funcion mostrar registros en formato de tabla, por cónsola
function mostrarData() {
  if (i > 0) {
    for (let i = 0; i < person.length; i++) {
      console.table(person[i]);
    }
  } else {
    alert("No hay datos para mostrar");
  }
}

// Función para mostrar la persona con mayor edad
function showOldestPerson() {
  console.log(
    "La persona con mayor edad es: " +
      oldPersonTemp.name +
      " con " +
      oldPersonTemp.age +
      " años"
  );
}

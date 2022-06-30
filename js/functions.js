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

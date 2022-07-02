// == [ FUNCTIONS ] ==

// Contruct Function that load person data and add them to the Object persona
export function PersonRegister(fName, fAge) {
  this.nName = fName;
  this.nAge = fAge;
}

// Function to show array registers in table format in the console
export function showData(fperson, fi) {
  if (fi > 0) {
    for (let fi = 0; fi < fperson.length; fi++) {
      console.table(fperson[fi]);
    }
    return;
  } else {
    alert("No hay datos para mostrar");
  }
}

// Fuction which calc the oldest person in the array
export function calcOldPerson(fPerson, fi) {
  var oldPerson = 0;
  for (let fi = 0; fi < fPerson.length; fi++) {
    if (fPerson[fi].nAge > oldPerson) {
      oldPerson = fPerson[fi];
      console.log(oldPerson);
    }
  }
  return oldPerson; //oldPerson;
}

// Function which shows the oldest person in the array in the console browser
export function showOldestPerson(fOldPersonTemp) {
  console.log(
    "La persona con mayor edad es: " +
      fOldPersonTemp.nName +
      " con " +
      fOldPersonTemp.nAge +
      " años"
  );
}

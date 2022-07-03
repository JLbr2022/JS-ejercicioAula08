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

// Function to sort the array ascending way by age  order and take the oldest person
export function calcOldPerson(fPerson) {
  fPerson.sort(function (a, b) {
    return a.nAge - b.nAge;
  });
  let oldPerson = fPerson[fPerson.length - 1];
  return oldPerson;
}

// Function which shows the oldest person in the array in the console browser
export function showOldestPerson(fOldPersonTemp, fi) {
  if (fi > 0) {
    console.log(
      "La persona con mayor edad es: " +
        fOldPersonTemp.nName +
        " con " +
        fOldPersonTemp.nAge +
        " años"
    );
  }
}

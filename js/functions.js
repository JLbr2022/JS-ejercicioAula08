// == [ FUNCTIONS ] ==

// Contruct Function that load person data and add them to the Object person
export function PersonRegister(fName, fAge) {
  this.nName = fName;
  this.nAge = fAge;
}

// Function to sort the array ascending way by age order and take the last value in the array
export function calcHighestValue(xArray) {
  xArray.sort(function (a, b) {
    return a.nAge - b.nAge; // sort and return the array highest value
  });
  let highValue = xArray[xArray.length - 1];
  return highValue;
}

// Function to show array registers in table format in the console
export function showData(fPerson, fi) {
  if (fi > 0) {
    fPerson.forEach((element) => console.table(element));
  } else {
    alert("No hay datos para mostrar");
  }
}

// Function which shows the oldest person in the array in the console browser
export function showOldestPerson(fOldPersonTemp, fi) {
  if (fi > 0) {
    for (let i = 0; i < fOldPersonTemp.length; i++) {
      console.table(
        "Persona con mayor edad es: " +
          fOldPersonTemp.nName +
          " con " +
          fOldPersonTemp.nAge +
          " años"
      );
    }
  }
}

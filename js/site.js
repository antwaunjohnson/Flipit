// get the string from the page
// controller function
function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);
  showString(revString);
}

//reverse the string
// logic function
function reverseString(userString) {
  let revString = [];
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }
  return revString;
}

// display success message with reversed string
// view function
function showString(revString) {
  document.getElementById(
    "message"
  ).innerHTML = `Your string flipped aroung is: ${revString}`;
  document.getElementById("alert").classList.remove("invisible");
}

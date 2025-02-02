const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse("").join("");
}

function emptyString() {
  return;
}

function check() {
  const value = input.value.trim().toLowerCase(); //trim whitespace

  if (value == "") {
    alert("Type something");
    return;
  }

  const reverse = reverseString(value);

  if (value == reverse) {
    alert("PALINDROME");
  } else {
    alert("Not today!");
  }
  input.value = ""; //clear the input field
}

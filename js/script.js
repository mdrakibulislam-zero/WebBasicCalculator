let OutputScreen = document.getElementById("OutputScreen");

function Display(num) {
  OutputScreen.value += num;
}
function Calculate() {
  try {
    OutputScreen.value = eval(OutputScreen.value);
  } 
  catch (error) {
    alert("Invalid");
  }
}
function Clear() {
  OutputScreen.value = "";
}
function Delete() {
  OutputScreen.value = OutputScreen.value.slice(0, -1);
}

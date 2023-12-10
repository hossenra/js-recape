function greeting(greetingHandler, name) {
  greetingHandler(name);
}

// const name = "Selim Molla";
// const numbers = [45, 54, 78];
// const laptop = { price: 45000, brand: "lenovo", memory: "8gb" };

function greetingHandler(name) {
  console.log("Good Morning", name);
}

function greetEvening(name) {
  console.log("Good Evening", name);
}

function greetNight(name) {
  console.log("Good Night", name);
}

greeting(greetingHandler, "Tom Hax");
greeting(greetingHandler, "Tom Brady");
greeting(greetingHandler, "Tom Cruise");
greeting(greetEvening, "Tom Solayman");
greeting(greetEvening, "Tom Max");
greeting(greetNight, "Tetu Sarder");

function submitHandler() {
  console.log("Submit button clicked");
}
document.getElementById("btn-submit").addEventListener("click", submitHandler);

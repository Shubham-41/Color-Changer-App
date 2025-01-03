/*
// Approach 01
const buttons = document.querySelectorAll(".button");
console.log(buttons);

// Here multiple Eventlistener used so it consumes more memory so it is not a good practise to do this
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    document.body.style.backgroundColor = btn.id;
  });
});

*/

// Approach 02

// Using Event Delegation
const ChangeColorsDiv = document.getElementById("ChangeColorsDiv");
// Here only one EventListner so it is optimized
ChangeColorsDiv.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.classList.contains("button")) {
    document.body.style.backgroundColor = event.target.id;
  }
});

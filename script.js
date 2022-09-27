"use strict";

/* document.querySelector(".message").textContent = "🎉 Correct number !";
document.querySelector(".score").textContent = "99";
document.querySelector(".number").textContent = "!!";
document.querySelector(".guess").value = "23"; */

//////-------GAME CACHE-------/////////

//generating a random number
const secretNum = Math.floor(Math.random() * 20) + 1;
console.log("SECRET NUMBER: " + secretNum);

//declaring a variable for click button
const clickButton = document.querySelector(".check");

///////////////////////////////////////////////////////////////
////////////----------GAME LOGIC------------/////////////
///////////////////////////////////////////////////////////////

//adding event listener to the click button
clickButton.addEventListener("click", () => {
  //declaring a variable to store user input
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //conditional statement to compare the userInput with Secret number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ no number";
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent = "correct";
  } else {
    document.querySelector(".message").textContent = "keep guessing";
  }
});

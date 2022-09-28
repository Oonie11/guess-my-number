"use strict";

/* document.querySelector(".message").textContent = "🎉 Correct number !";
document.querySelector(".score").textContent = "99";
document.querySelector(".number").textContent = "!!";
document.querySelector(".guess").value = "23"; */

//////-------GAME CACHE-------/////////

//generating a random number
const secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNum;

//Keeping a score
let score = 20;
let highScore = 0;

//declaring a variable for click button
const clickButton = document.querySelector(".check");

///////////////////////////////////////////////////////////////
////////////----------GAME LOGIC------------/////////////
///////////////////////////////////////////////////////////////

//adding event listener to the click button
clickButton.addEventListener("click", () => {
  //declaring a variable to store user input
  const guess = Number(document.querySelector(".guess").value);

  //conditional statement to compare the userInput with Secret number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ no number";
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent = "🎉 Correct number !";
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the Game !";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the Game !";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    document.querySelector(".message").textContent = "Error Found";
  }
});

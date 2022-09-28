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
let score = Number(document.querySelector(".score").textContent);
console.log(typeof score);
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
  console.log(guess, typeof guess);

  //conditional statement to compare the userInput with Secret number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ no number";
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent = "🎉 Correct number !";
  } else if (guess > secretNum) {
    document.querySelector(".message").textContent = "📈 Too high";
    document.querySelector(".score").textContent = `${(score -= 1)}`;
  } else if (guess < secretNum) {
    document.querySelector(".message").textContent = "📉 Too low";
    document.querySelector(".score").textContent = `${(score -= 1)}`;
  } else {
    document.querySelector(".message").textContent = "Error Found";
  }
});

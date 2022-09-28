"use strict";

/* document.querySelector(".message").textContent = "🎉 Correct number !";
document.querySelector(".score").textContent = "99";
document.querySelector(".number").textContent = "!!";
document.querySelector(".guess").value = "23"; */

//////-------GAME CACHE-------/////////

//generating a random number
let secretNum = Math.trunc(Math.random() * 20) + 1;

//Keeping a score
let score = 20;
let highScore = 0;

//declaring a variable for click button
const clickButton = document.querySelector(".check");

//TEST FUNCTION

const textSelector = (text, value) => {
  document.querySelector(text).textContent = value;
};

///////////////////////////////////////////////////////////////
////////////----------GAME LOGIC------------/////////////
///////////////////////////////////////////////////////////////

///////////////////////////////////////////
//adding event listener on CHECK button
//////////////////////////////////////////
clickButton.addEventListener("click", () => {
  //declaring a variable to store user input
  const guess = Number(document.querySelector(".guess").value);

  //conditional statement to compare the userInput with Secret number

  //WHEN THERE IS NO NUMBER
  if (!guess) {
    textSelector(".message", "⛔️ no number");
  } else if (guess === secretNum) {
    textSelector(".message", "🎉 Correct number !");
    textSelector(".number", secretNum);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    //add high-score
    if (score > highScore) {
      highScore = score;
      textSelector(".highscore", highScore);
    }
    //IF GUESS IS DIFFERENT THAN CORRECT NUMBER
  } else if (guess !== secretNum) {
    if (score > 1) {
      textSelector(
        ".message",
        guess > secretNum ? "📈 Too high" : "📉 Too low"
      );
      score--;
      textSelector(".score", score);
    } else {
      textSelector(".message", "💥 You lost the Game !");
      textSelector(".score", 0);
    }
  }
});

///////////////////////////////////////////
//adding event listener on Again/reset button
//////////////////////////////////////////

//declaring a variable to select Again button in DOM
const resetButton = document.querySelector(".again");

//adding event listener to reset (Again) button

resetButton.addEventListener("click", () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  textSelector(".score", score);
  textSelector(".number", "?");
  textSelector(".message", "Start guessing...");
  textSelector(".guess", "");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

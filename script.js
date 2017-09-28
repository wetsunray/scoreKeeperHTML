var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");
var winNumber = 5;
var firstScore = 0;
var secondScore = 0;
var firstButton = document.getElementById("firstButton");
var secondButton = document.getElementById("secondButton");
var reset = document.getElementById("reset");
var someoneWon = false;
var numInput = document.querySelector("input");
var winConDisplay = document.getElementById("winConDisplay");
var userIn = winConDisplay.textContent;

firstButton.addEventListener("click", function(){
  if (!someoneWon){
    if(firstScore < winNumber) {
      firstScore++;
      firstNumber.textContent = firstScore;

    }
  }
  if(firstScore === winNumber){
    firstNumber.classList.add("victory");
    someoneWon = true;
  }
});

secondButton.addEventListener("click", function(){
  if (!someoneWon){
    if(secondScore < winNumber){
      secondScore++
      secondNumber.textContent = secondScore;
    }
  }
  if(secondScore === winNumber){
    secondNumber.classList.add("victory");
    someoneWon = true;
  }
});

reset.addEventListener("click", function(){
  someoneWon = false;
  firstScore = 0;
  firstNumber.textContent = firstScore;
  secondScore = 0;
  secondNumber.textContent = secondScore;
  firstNumber.classList.remove("victory");
  secondNumber.classList.remove("victory");
})

numInput.addEventListener("change", function(){
  var winNum = numInput.value;
  winNumber = parseInt(winNum);
  winConDisplay.textContent = winNum
})
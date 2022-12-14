var questions = document.querySelector("#questions")
var timerElement = document.querySelector(".timer")
var startButton = document.querySelector(".start-button")
var answersDiv = document.querySelector("#answers")
var scoreCard = document.querySelector("#scoreCard")
var setPoints = document.querySelector(".setPoints")
var submit = document.querySelector(".submit")
var playerInput = document.querySelector("#player")
var userPlayerSpan = document.querySelector("#prevPlayer");
var userScoreSpan = document.querySelector("#prevScore");

var score = 0
var isWin = false;
var timer = 40
var timerCount;
var playerText = "";
var chosenQuestion = [];

var questions = [
  {text:"How many active Volcanos are in the United States of America?", answers:[{name:78, value: false}, {name:110, value: false}, {name:161, value: true}, {name: 202, value: false}]},
  
  {text:"Which state has the most National Parks?", answers: [{name:"Alaska", value: false}, {name:"California", value: true}, {name:"Colorado", value: false}, {name:"Utah", value: false}]},
  
  {text:"Which of the following is NOT a National Park?", answers: [{name:"Yosemite", value: false}, {name:"Yellowstone", value: false}, {name:"Disneyland", value: true}, {name:"Grand Canyon", value: false}]},
  
  {text:"Which of the following cities has the highest population", answers: [{name:"Philadelphia", value: false}, {name:"San Antonio", value: false}, {name:"San Diego", value: false}, {name:"Phoenix", value: true}]}
];

renderLastRegistered();

//renders the previous intials 
function renderLastRegistered() {
  var highP = localStorage.getItem("savedPlayer");
  var highS = localStorage.getItem("savedScore");

  if (!highP || !highS) {
    return;
  }

  userPlayerSpan.textContent = highP;
  userScoreSpan.textContent = highS;
}

//start game function ran when Start button clicked
function startGame () {
  isWin = false;
  timerCount = 40;
  startButton.disabled = true;
  startTimer()
  renderQuestions()
}

//present user with final score
var scoreCard = function() {
  setPoints.textContent = score;  
  alert("You've Finished! Enter your intials and save you score")
  // console.log("got to scoreCard");
  
}
//timer setup
function startTimer () {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount > 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        }
      }
      if (timerCount === 0) {
        clearInterval(timer)
        endGame()
        scoreCard()
        ;
      }
    }, 1000);
  }


  var index = 0
  //renders set of questions from question array
function renderQuestions() {
    document.getElementById("questions").innerHTML = questions[index].text;
    // resets the answer buttons
    answersDiv.innerHTML = '';
    questions[index].answers.forEach(answer => {
      var button = document.createElement("button")
      button.setAttribute("value", answer.value)
      button.textContent = answer.name
      answersDiv.appendChild(button)
      button.onclick = function() {
        var guess = answer.value
        answer[index]
        
        if (guess === true) {
          console.log("Yes")
          score += 1
          alert("Correct!")
          
        } else {
          console.log("No")
          alert("Wrong. -8 seconds")
          timerCount -= 8
        }
        index++ 
        if (questions.length > index) {
          renderQuestions()
        } else {
          endGame()
          scoreCard();
          }
      
   
        
      }
    });
  }

  //stored last score
  submit.addEventListener("click", function(event) {
  event.preventDefault();

  var userInfo = document.querySelector("#player").value;

  console.log("stored score")
  score.textContent = score;
  localStorage.setItem("savedScore", score)
  localStorage.setItem("savedPlayer", userInfo);
  renderLastRegistered()
  })

  function endGame() {
    clearInterval(timer)
  }

  
  // submit.addEventListener("click", saveScore);
  startButton.addEventListener("click", startGame);
  
  // Psuedo
  // Landing page
  // I need a start button
  // Description of app: welcome to my quiz, this is how it works sort of thing
  // I need an event listener on start button -- listening for clicks
  // When you click the start button, the landing page disappears and the first question & answers appears AND the timer appears and starts counting down
  // Need a timer that counts down
  // I need a set of questions -- array of objects
  // ? What do the questions need to include?
  // Question text -- string
  // Set of answers -- array of strings
  // Some way to check whether the answer is correct -- give the string OR the index of the correct answer
  // ! Some way to track whether the answer the user selected is the correct answer -- does NOT need to be with the other question info
  // Need a way to display the question text, answers, and the answers need to be clickable
  // When you click an answer
  // Compares the answer you chose to the correct answer
  // Displays some kind of feedback based on whether the selected answer is correct or incorrect
  // If the answer is incorrect, time is subtracted from the clock
  // Regardless whether the answer is correct or incorrect, the current question disappears and the next question appears UNLESS the user is on the final question
  // If the user is on the last question, once they select an answer, they're presented with a form to enter their initials
  // Initials and remaining time is saved to local storage as the score
  
  
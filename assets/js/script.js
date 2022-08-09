var questions = document.querySelector("#questions")
var timerElement = document.querySelector(".timer")
var startButton = document.querySelector(".start-button")
var answersDiv = document.querySelector("#answers")
var scoreCard = document.querySelector("#scoreCard")

var score;
var isWin = false;
var timer;
var timerCount;

var chosenQuestion = [];

var questions = [
  {text:"How many active Volcanos are in the United States of America?", answers:[{name:78, value: false}, {name:110, value: false}, {name:161, value: true}, {name: 202, value: false}]},
  
  {text:"Which state has the most National Parks?", answers: [{name:"Alaska", value: false}, {name:"California", value: true}, {name:"Colorado", value: false}, {name:"Utah", value: false}]},
  
  {text:"Which of the following is NOT a National Park?", answers: [{name:"Yosemite", value: false}, {name:"Yellowstone", value: false}, {name:"Disneyland", value: true}, {name:"Grand Canyon", value: false}]},
  
  {text:"Which of the following cities has the highest population", answers: [{name:"Philadelphia", value: false}, {name:"San Antonio", value: false}, {name:"San Diego", value: false}, {name:"Phoenix", value: true}]}
];


function startGame () {
  // console.log("Game Started")
  isWin = false;
  timerCount = 40;
  startButton.disabled = true;
  startTimer()
  renderQuestions()
}

function scoreCard() {
   // Create a form dynamically
   var form = document.createElement("form");
   form.setAttribute("method", "post");
   form.setAttribute("action", "submit.php");

}

// function isWin() {
//   clearInterval(timer)

// }

function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
  }
  
  function startTimer () {
    // console.log("Made it to Timer")
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
        }
      }
      if (timerCount === 0) {
        clearInterval(timer)
        scoreCard()
        ;
      }
    }, 1000);
  }
  var index = 0
  function renderQuestions() {
    // console.log("Questions started")
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
        console.log(index)
        if (index === questions.length) {
          console.log("made it")
          return;
        }
        renderQuestions()
        
      }
    });
  }
   

    startButton.addEventListener("click", startGame);
    
    
    // for (var i = 0; i < questions.length; i++)
    // if else to continue questions or stop ater .length
    
    
    
  
  
  
  // WHEN all questions are answered or the timer reaches 0
  // THEN the game is over
  // WHEN the game is over
  // THEN I can save my initials and my score
  
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
  
  // Game ends when all questions are answered OR the timer reaches 0 -- is there a case where the timer might go lower than 0 that needs to be accounted for?
  
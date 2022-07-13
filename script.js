import { quizQuestions } from "./questions/questions.js";
console.log(quizQuestions);
//GLOBAL VARIABLES
const question = document.querySelector(".quiz__question");
const answers = document.querySelectorAll(".quiz__solution-button");
const answerA = document.querySelector(".quiz__solution-buttonA");
const answerB = document.querySelector(".quiz__solution-buttonB");
const answerC = document.querySelector(".quiz__solution-buttonC");
const images = document.querySelector(".quiz__image");
const nextButton = document.querySelector(".button-next");
const resetButton = document.querySelector(".button-reset");
const quizContainer = document.querySelectorAll(".quiz");
const quizScore = document.querySelector(".quiz__score");

let questionNumber = 0;
let scoreAccumulating = 0;
let answerCorrectGiven = false;


// next 

nextButton.addEventListener("click", () => {
  answerCorrectGiven = false;
  questionNumber = questionNumber + 1;
  quizInfo = quizQuestions[questionNumber];
  //re assigning quiz info based on question
  console.log(quizQuestions[questionNumber]);
  questionContainer();
});

let quizInfo = quizQuestions[questionNumber];

const questionContainer = () => {
  question.innerHTML = quizInfo.question;
  console.log(question);

  images.src = quizInfo.imgSrc;

  answerA.innerText = quizInfo.solutions[0].text;
  answerB.innerText = quizInfo.solutions[1].text;
  answerC.innerText = quizInfo.solutions[2].text;
};

questionContainer();

//click the answers and see if write or wrong

// when you click on correct answer get a message telling you correct or try again

console.log(answers);

const checkSolutions = () => {
  answers.forEach((answer, index) => {
    answer.addEventListener("click", () => {
      console.log(quizInfo.solutions[index].isCorrect);
      //given correct answer and havent already tried to give right answer
      if (quizInfo.solutions[index].isCorrect == true && answerCorrectGiven === false) {
        alert("well done you can move on to the next question!!");
        answerCorrectGiven = true;
        scoreAccumulating++;
        quizScore.innerText = "Score : " + scoreAccumulating;
      } else {
        alert("try again");
      }
    });
  });
};
checkSolutions();

//score
console.log(quizScore);

console.log(scoreAccumulating);

//timer



//reset button

const handleReset = (event) => {
  questionNumber = 0;
  quizInfo = quizQuestions[0];
  questionContainer();
  scoreAccumulating = 0;
  console.log(scoreAccumulating);
  quizScore.innerText = +scoreAccumulating;
};
resetButton.addEventListener("click", handleReset);

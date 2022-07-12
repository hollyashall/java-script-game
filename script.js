import { quizQuestions } from "./questions/questions.js";
console.log(quizQuestions);
//GLOBAL VARIABLES
const question = document.querySelector(".quiz__question");
const answers = document.querySelectorAll(".quiz__solutions");
const answerA = document.querySelector(".quiz__solution-buttonA");
const answerB = document.querySelector(".quiz__solution-buttonB");
const answerC = document.querySelector(".quiz__solution-buttonC");
const images = document.querySelector(".quiz__image");
const nextButton = document.querySelector(".button-next");
const resetButton = document.querySelector(".button-reset");
const quizContainer = document.querySelectorAll(".quiz");

// and an array to hold all of the questions that make up  quiz.
//Using an array will make the questions easy to iterate over:
// each question is an object

//FIRST SECTION: CHOOSE THE QUESTIONS: put in container
// put the questions and answers in

// use object literals to represent the individual questions

let questionNumber = 0;

nextButton.addEventListener("click", () => {
  questionNumber = questionNumber +1;
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






//submit, show the results



//End of quiz show score

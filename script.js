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
const container = document.querySelectorAll(".main-section");

// and an array to hold all of the questions that make up  quiz.
//Using an array will make the questions easy to iterate over:
// each question is an object

//FIRST SECTION: CHOOSE THE QUESTIONS: put in container
// put the questions and answers in

// use object literals to represent the individual questions

let questionNumber = 3;
quizQuestions[questionNumber];

nextButton.addEventListener("click", () => {
  questionNumber = questionNumber++;
  const result = questionContainer(questionNumber);
});

const questionContainer = () => {
  console.log(questionNumber);
  const quizInfo = quizQuestions[questionNumber];

  question.innerHTML = quizInfo.question;
  console.log(question);

  console.log(images.src);
  images.src = quizInfo.imgSrc;

  answerA.innerText = quizInfo.solutions[0].text;
  answerB.innerText = quizInfo.solutions[1].text;
  answerC.innerText = quizInfo.solutions[2].text;
};

questionContainer();

// event clicker which adds one to question number

// index get ecach next question
// change DOM with the question array

//for each loop for the questions

//Make a function to display the questions

//submit, show the results

// on click of the next button a new set of questions will appear

//End of quiz show score

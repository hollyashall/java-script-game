
import {quizQuestions} from "./questions/questions.js"
console.log(quizQuestions);
//GLOBAL VARIABLES
const question = document.querySelector(".quiz__question");
const answers = document.querySelectorAll(".quiz__solutions");
const answerA = document.querySelector(".quiz__solution-buttonA");
const answerB = document.querySelector(".quiz__solution-buttonB");
const answerC = document.querySelector(".quiz__solution-buttonC");
const images =document.querySelector(".quiz__image")
const nextButton = document.querySelector(".button-next");
const resetButton = document.querySelector(".button-reset")
const container =document.querySelectorAll(".main-section")
//^need to do this



// and an array to hold all of the questions that make up  quiz. 
//Using an array will make the questions easy to iterate over:
// each question is an object

//FIRST SECTION: CHOOSE THE QUESTIONS: put in container
 // put the questions and answers in

// use object literals to represent the individual questions

let questionNumber = 0;

//for each this????
const questionContainer = () =>{

const quizInfo = quizQuestions[questionNumber];

question.innerHTML = quizQuestions[0].question;
console.log(question);

images.innerHTML = quizQuestions[questionNumber].imgSrc[0];

answerA.innerText = quizQuestions[questionNumber].solutions[0].text;
answerB.innerText = quizQuestions[questionNumber].solutions[1].text;
answerC.innerText = quizQuestions[questionNumber].solutions[2].text;
}

questionContainer();

// event clicker which adds one to question number

nextButton.addEventListener("click", () =>{
  questionNumber = questionNumber++
})


// index get ecach next question 
// change DOM with the question array 

//for each loop for the questions





 //Make a function to display the questions


 //submit, show the results

 // on click of the next button a new set of questions will appear



 //End of quiz show score
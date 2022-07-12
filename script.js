
import {quizQuestions} from "./questions/questions.js"
console.log(quizQuestions);
//GLOBAL VARIABLES
const question = document.querySelector(".quiz__question");
const answers = document.querySelectorAll(".quiz__solutions");
const answerA = document.getElementById
const nextButton = document.querySelector(".button-next");
const resetButton = document.querySelector(".button-reset")

//^need to do this

// console.log(quizQuestions[0].question);
console.log(quizQuestions.question);

// and an array to hold all of the questions that make up  quiz. 
//Using an array will make the questions easy to iterate over:
// each question is an object

//FIRST SECTION: CHOOSE THE QUESTIONS: put in container
 // put the questions and answers in

// use object literals to represent the individual questions

let questionNumber = 0;

const questionContainer = () =>{

const quizInfo = quizQuestions[questionNumber];

question.innerHTML = quizQuestions[0].question;
console.log(question);
answers.innerHTML = quizQuestions[0].solutions;

}

questionContainer()

// index get ecach next question 
// change DOM with the question array 

//for each loop for the questions





 //Make a function to display the questions


 //submit, show the results

 // on click of the next button a new set of questions will appear



 //End of quiz show score
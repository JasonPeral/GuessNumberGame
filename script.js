'use strict';

// //Lesson #70 Guess my number

// //This is how to select an element from html page on javascript
// //When inputting an argument of the querySelector its the same way of selecting
// //an element in css . for classes # for ids

// //We wanted to see what we selected so we are logging it to the console
// console.log(document.querySelector('.message').textContent);

//This lesson is a 1 example lesson on how to select an element in DOM
//Shows us how the connection is established between our code and the UI

// //Lesson #72 Selecting and manipulating elements
// //To change values of text content
// document.querySelector('.message').textContent = 'Correct Number 🥸';
// document.querySelector('.number').textContent = 'G';
// document.querySelector('.score').textContent = '?';

// //to change values of a input field
// document.querySelector('.guess').value = 45;
// //Checking what the value holds without manipulation
// console.log(document.querySelector('.guess').value);
//Testing
//Lesson 73 handling click events

//Here we are creating a function that will be part of the event handler for the check button
// const x = function () {
//   let y = Number(document.querySelector('.guess').value);
//   //   console.log(y, typeof y);

//   //The logic here is straight forward
//   // -if y which is our guess input value is falsey so 0 or empty we will display this first block
//   if (!y) {
//     document.querySelector('.message').textContent = 'Please choose a + number';
//     //else if it has anything else we will display this string in place of the start guessing
//     //part of the html
//   } else {
//     document.querySelector('.message').textContent = 'Good choice!';
//   }
// };

// //Breaking down this 1 line
// //First we select the button with the query selector and the class name .check

// //Then we use the addEventListener method on that exact element to attach an event handler

// //The event handler is the 2nd argument in the method and you can put the whole function
// //within the parenthesis but its cleaner to create the function outside of the block
// document.querySelector('.check').addEventListener('click', x);

//74 -- Implementing the game logic

//We need a global random number for each game

//document.querySelector('.number').textContent = ranNum;
let score = 20;
let ranNum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

//To also refactor our code to get more dry we can place re-used code lines into a simple function
const message = function (message) {
  document.querySelector('.message').textContent = message;
};

const guess = function () {
  let x = Number(document.querySelector('.guess').value);
  //let score = Number(document.querySelector('.score').value);

  if (!x) {
    //document.querySelector('.message').textContent = 'No guess was made';
    message('No guess was made');
  } else if (x === ranNum) {
    //REFACTORED
    //document.querySelector('.message').textContent = 'Correct guess!🤙🏽';
    message('Correct guess!🤙🏽');
    //Going to manipulate the style to change the background to green when we end up winning
    //the game
    //Couple things to note down here--when manipulating styles we use the .styles
    //When entering the value of the style manipulation it has to be in a string
    //If the style selector like backgroundColor is 2 words we have to use camelcase
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').textContent = ranNum + '!';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      //When guess is too high
    }
  } else if (x !== ranNum) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     x > ranNum ? 'Too high📈' : 'Too low📉';
      //REFACTORED
      message(x > ranNum ? 'Too high📈' : 'Too low📉');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game...';
      //REFACTORED
      message('You lost the game...');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'darkred';
    }
  }
  //   } else if (x > ranNum) {
  //     //Within the greater than or less than blocks we want to create

  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game...';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'darkred';
  //     }

  //     //When guess is too low
  //   } else if (x < ranNum) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low📉';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game...';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'darkred';
  //     }
  //   }
};

const reset = function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  ranNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
};

document.querySelector('.check').addEventListener('click', guess);
document.querySelector('.again').addEventListener('click', reset);

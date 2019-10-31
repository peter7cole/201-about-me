'use strict';

// Get Name

var player1 = prompt('Hi! What is your name?');
player1 = player1.toLowerCase();
console.log('name: ' + player1);

// Question 1

var ansLions = prompt('Greetings, ' + player1 + '!\n\nDo you like lions? (yes/no)');
ansLions = ansLions.toLowerCase();

if (ansLions === 'yes' || ansLions === 'no'){
  console.log('lions! answer: ' + ansLions);
} else {
  console.log(ansLions + '. Ya blew it.');
}

// Question 2

var ansTigers = prompt('Do you like tigers? (yes/no)');
ansTigers = ansTigers.toLowerCase();

if (ansTigers === 'yes' || ansTigers === 'no'){
  console.log('tigers! answer: ' + ansTigers);
} else {
  console.log(ansTigers + '. Ya blew it.');
}

// Question 3

var ansBears = prompt('Do you like bears? (yes/no)');
ansBears = ansBears.toLowerCase();

if (ansBears === 'yes' || ansBears === 'no'){
  console.log('bears! answer: ' + ansBears);
} else {
  console.log(ansBears + '. Ya blew it.');
}

// Question 4

var ansOhMy = prompt('Have you ever said "OH MY!" (yes/no)');
ansOhMy = ansOhMy.toLowerCase();

if (ansOhMy === 'yes' || ansOhMy === 'no'){
  console.log('previous expression of alarm, answer: ' + ansOhMy);
} else {
  console.log(ansOhMy + '. Ya blew it.');
}

// Question 5

var ansHouse = prompt('Has a house ever fallen on a close relative? (yes/no)');
ansHouse = ansHouse.toLowerCase();

if (ansHouse === 'yes' || ansHouse === 'no'){
  console.log('prior OSHA claim, answer: ' + ansHouse);
} else {
  console.log(ansHouse + '. Ya blew it.');

}

// Question 6 Number Game

var myNumber = Math.floor(Math.random() * 10) +1; // creates random # 1 - 10
console.log(myNumber);

var numberOfGuessesLeft = 4;
var correctFlag = 1;

while ((numberOfGuessesLeft !== 0) && (correctFlag === 1)) {
  var ansNumber = prompt('Guess a number between 1 and 10');
  console.log(ansNumber);
  console.log(correctFlag);
  numberOfGuessesLeft--;
  console.log(numberOfGuessesLeft);
  if (ansNumber == myNumber) {
    correctFlag--;
  }
  if (ansNumber > myNumber) {
    alert('Too high!');
  }
  if (ansNumber < myNumber) {
    alert('Too low!');
  }
}

if (correctFlag !== 1){
  alert('Great job on the correct answer, ' + player1 + '!\n\nThank you for playing!')
} else {
  alert('The correct answer was ' + myNumber);
  alert('Thank you for letting me run you through some questions, ' + player1 + '!');
  console.log('name: ' + ansLions, '\nTigers: ' + ansTigers,
    '\nBears: ' + ansBears, '\nOh My: ' + ansOhMy, '\nHome-icide: ' + ansHouse);
}

// Peter - when we get arrays, try using one variable
// and cycling the prompts and logs as strings? 10/29/19

// Name variables after what you expect them to hold, like answerLions
// select the next found variable "ctrl + d" for windows, check for mac
// when you have the variety of variables, use that to make your
// responses more descriptive, elaborate.

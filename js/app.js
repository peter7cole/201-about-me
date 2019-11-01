'use strict';

// Get Name & start Score

var player1 = prompt('Hi! What is your name?');
player1 = player1.toString();
player1 = player1.toLowerCase();
player1 = player1.charAt(0).toUpperCase() + player1.slice(1); // Capitalize first letter of name
console.log('Name: ' + player1);

var score = 0;
console.log('Score: ' + score);

// Question 1

var ansLions = prompt('Greetings, ' + player1 + '!\n\nDo you like lions? (yes/no)');
ansLions = ansLions.toLowerCase();

if (ansLions === 'yes'){
  alert('I agree!');
  console.log('Lion answer: ' + ansLions);
  score++;
  console.log('score: ' + score);
} else if (ansLions === 'no') {
  alert('Lions should be appreciated, please');
  console.log('Lion answer: ' + ansLions);
} else {
  alert('Please answer yes or no');
  console.log('Lion answer: ' + ansLions + ' is not a yes or no answer');
}

// Question 2

var ansTigers = prompt('Do you like tigers? (yes/no)');
ansTigers = ansTigers.toLowerCase();

if (ansTigers === 'yes'){
  alert('I agree!');
  console.log('Tiger answer: ' + ansTigers);
  score++;
  console.log('score: ' + score);
} else if (ansTigers === 'no') {
  alert('Tigers should be appreciated, please');
  console.log('Tiger answer: ' + ansTigers);
} else {
  alert('Please answer yes or no');
  console.log('Tiger answer: ' + ansTigers + ' is not a yes or no answer');
}

// Question 3

var ansBears = prompt('Do you like bears? (yes/no)');
ansBears = ansBears.toLowerCase();

if (ansBears === 'yes'){
  alert('I agree!');
  console.log('Bear answer: ' + ansBears);
  score++;
  console.log('score: ' + score);
} else if (ansBears === 'no') {
  alert('Bears should be appreciated, please');
  console.log('Bear answer: ' + ansBears);
} else {
  alert('Please answer yes or no');
  console.log('Bear answer: ' + ansBears + ' is not a yes or no answer');
}

// Question 4

var ansPenguin = prompt('Would you ever like swim with penguins? (yes/no)');
ansPenguin = ansPenguin.toLowerCase();

if (ansPenguin === 'yes'){
  alert('I agree!');
  console.log('Penguin answer: ' + ansPenguin);
  score++;
  console.log('score: ' + score);
} else if (ansPenguin === 'no') {
  alert('Penguins should be appreciated, please.');
  console.log('Penguin answer: ' + ansPenguin);
} else {
  alert('Please answer yes or no');
  console.log('Penguin answer: ' + ansPenguin + ' is not a yes or no answer');
}

// Question 5

var ansCar = prompt('Have you ever saved a ton of money on car insurance? (yes/no)');
ansCar = ansCar.toLowerCase();

if (ansCar === 'yes'){
  alert('Nice! I bet I can guess which company!');
  console.log('Car answer: ' + ansCar);
  score++;
  console.log('score: ' + score);
} else if (ansCar === 'no') {
  alert('Coulda woulda shoulda.');
  console.log('Car answer: ' + ansCar);
} else {
  alert('Please answer yes or no');
  console.log('Car answer: ' + ansCar + ' is not a yes or no answer');
}

console.log('Current Score: ' + score);

// Question 6 Number Game

var winNumber = (Math.floor(Math.random() * 10) + 1); // creates random # 1 - 10
console.log('Winning Number: ' + winNumber);
var numberOfGuessesLeft = 4;
console.log('Guesses Left: ' + numberOfGuessesLeft);
var correctFlag = 0;
console.log('Correct Flag (1-yes or 0-no): ' + correctFlag);
var ansNumber = '';

while ((numberOfGuessesLeft !== 0) && (correctFlag === 0)) {
  ansNumber = prompt('Guess a number between 1 and 10. You get ' +
    numberOfGuessesLeft + ' more guesses.');
  ansNumber = parseInt(ansNumber, 10);
  console.log('Guess: ' + ansNumber + ', typeof ' + typeof winNumber); // converts prompt to number
  if (ansNumber === winNumber) {
    correctFlag++;
  }
  console.log('Correct Flag (1-yes or 0-no): ' + correctFlag);
  if (correctFlag === 0) {
    if ((ansNumber > winNumber) && (ansNumber <= 10)) {
      numberOfGuessesLeft--;
      alert('Too high! Guesses left: ' + numberOfGuessesLeft);
      console.log('Too high!');
      console.log('Guess Left: ' + numberOfGuessesLeft);
    } else if ((ansNumber < winNumber) && (ansNumber >= 1)) {
      numberOfGuessesLeft--;
      alert('Too low! Guesses left: ' + numberOfGuessesLeft);
      console.log('Too low!');
      console.log('Guesses left: ' + numberOfGuessesLeft);
    } else {
      alert('Please! It has to be a number between 1 and 10.');
      console.log('Invalid input');
      console.log('Guesses Left: ' + numberOfGuessesLeft);
    }
  }
}

if (correctFlag === 1){
  alert('Great job on the correct answer, ' + player1 + '!');
  score++;
  console.log('Score: ' + score);
} else {
  alert('The correct answer was ' + winNumber + '.');
}

// Question 7 Array of Volcanoes

var arrayVolcanoes = ['Baker', 'Glacier', 'Rainier', 'Adams', 'Helens'];
console.log('Volcanoes: ' + arrayVolcanoes);

var arrayGuessed = [];
var guessedAlready = false;
var ansVolcano = '';
var volcanoesCorrect = 0;

correctFlag = 0;
console.log('Correct Flag (1-yes or 0-no): ' + correctFlag);

numberOfGuessesLeft = 6;
console.log('Guesses Left: ' + numberOfGuessesLeft);

while ((numberOfGuessesLeft > 0) && (volcanoesCorrect < 5)) {
  ansVolcano = prompt('Name the 5 washington volcanoes!\n(You get ' +
    numberOfGuessesLeft + ' more guesses)\nGuessed already: ' + arrayGuessed);
  ansVolcano = ansVolcano.toString();
  ansVolcano = ansVolcano.toLowerCase();
  ansVolcano = ansVolcano.charAt(0).toUpperCase() + ansVolcano.slice(1);
  for(var index = 0; index < arrayGuessed.length; index++) {
    if(arrayGuessed[index] === ansVolcano) {
      guessedAlready = true;
    }
  }
  if ((ansVolcano !== '') && (guessedAlready !== true)) {
    arrayGuessed.push(ansVolcano);
    console.log('Guessed: ' + arrayGuessed);
  }
  if (guessedAlready !== true) {
    for(index = 0; index < arrayVolcanoes.length; index++) {
      if(arrayVolcanoes[index] === ansVolcano) {
        alert(arrayVolcanoes[index] + ' is right, you got one!');
        arrayVolcanoes.splice(index, 1);
        // volcanoesCorrect++;
        volcanoesCorrect = 5;// Delete this line to make them guess all 5
        console.log('# of Volcanoes correctly guessed: ' + volcanoesCorrect);
        correctFlag = 1; //
        console.log(correctFlag);
        score++;
        console.log('Score: ' + score);
        numberOfGuessesLeft--;
        console.log('Remaining Volcanoes: ' + arrayVolcanoes);
        console.log('Guessed Already: ' + arrayGuessed);
      }
    }
    if ((ansVolcano !== '') && (correctFlag !== 1)) {
      alert('Sorry, that is not correct!');
      numberOfGuessesLeft--;
      console.log('Guesses left: ' + numberOfGuessesLeft);
    }
    correctFlag = 0;
  } else if (guessedAlready === true) {
    alert('You have already guessed that!');
    guessedAlready = false;
  } else {
    console.log('Remaining Volcanoes: ' + arrayVolcanoes);
    console.log('Guessed Already: ' + arrayGuessed);
  }
}

// AFTER 5 guesses

if (volcanoesCorrect === 5) {
  // alert('Congrats you got them all!');
  alert('Congrats you know a volcano in Washington!' +
    '\n\nHere are the rest: ' + arrayVolcanoes.toString());
} else {
  alert('Ah, too bad!\n\nYou are out of guesses!');
}

alert(player1 + ', thank you for playing!\n\n' +
  'Out of 7 questions, you got ' + score + ' right!');


// Peter - when we get arrays, try using one variable
// and cycling the prompts and logs as strings? 10/29/19

// Name variables after what you expect them to hold, like answerLions
// select the next found variable "ctrl + d" for windows, check for mac
// when you have the variety of variables, use that to make your
// responses more descriptive, elaborate.
// webkitConvertPointFromNodeToPage


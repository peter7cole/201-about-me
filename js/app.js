'use strict';

// Get Name

var player1 = prompt('Hi! What is your name?');
player1 = player1.toLowerCase();
alert('name: ' + player1);
// console.log('name: ' + player1);

// Question 1

var ask = prompt('Greetings, ' + player1 + '!\n\nDo you like lions? (yes/no)');
ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
  alert('lions!');
  // console.log('lions!');
} else {
  alert('knock knock. ya blew it.');
  // console.log('knock knock. ya blew it.');
}

// Question 2

ask = prompt('Do you like tigers? (yes/no)');
ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
  alert('tigers!');
  // console.log('tigers!');
} else {
  alert('knock knock. ya blew it.');
  // console.log('knock knock. ya blew it.');
}

// Question 3

ask = prompt('Do you like bears? (yes/no)');
ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
  alert('bears!');
  // console.log('bears!');
} else {
  alert('knock knock. ya blew it.');
  // console.log('knock knock. ya blew it.');
}

// Question 4

ask = prompt('Have you ever said "OH MY!" (yes/no)');
ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
  alert('previous expression of alarm');
  // console.log('previous expression of alarm');
} else {
  alert('knock knock. ya blew it.');
  // console.log('knock knock. ya blew it.');
}

// Question 5

ask = prompt('Has a house ever fallen on a close relative? (yes/no)');
ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
  alert('prior OSHA claim');
  // console.log('prior OSHA claim');
} else {
  alert('knock knock. ya blew it.');
  // console.log('knock knock. ya blew it.');

}

alert('Thank you for letting me run you through some questions, ' + player1 + '!');

// Peter - when we get arrays, try using one variable
// and cycling the prompts and logs as strings? 10/29/19

'use strict';

// Get Name

var name = prompt('Hi! What is your name?');
var name = name.toLowerCase();
alert('name: ' + name);
// console.log('name: ' + name);

// Question 1

var ask = prompt('Greetings, ' + name + '!\n\nDo you like lions? (yes/no)');
var ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
    alert('lions!');
    // console.log('lions!');
} else {
    alert('knock knock. ya blew it.');
    // console.log('knock knock. ya blew it.');
}

// Question 2

var ask = prompt('Do you like tigers? (yes/no)');
var ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
    alert('tigers!');
    // console.log('tigers!');
} else {
    alert('knock knock. ya blew it.');
    // console.log('knock knock. ya blew it.');
}

// Question 3

var ask = prompt('Do you like bears? (yes/no)');
var ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
    alert('bears!');
    // console.log('bears!');
} else {
    alert('knock knock. ya blew it.');
    // console.log('knock knock. ya blew it.');
}

// Question 4

var ask = prompt('Have you ever said "OH MY!" (yes/no)');
var ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
    alert('previous expression of alarm');
    // console.log('previous expression of alarm');
} else {
    alert('knock knock. ya blew it.');
    // console.log('knock knock. ya blew it.');
}

// Question 5

var ask = prompt('Has a house ever fallen on a close relative? (yes/no)');
var ask = ask.toLowerCase();

if (ask === 'yes' || ask === 'no'){
    alert('prior OSHA claim');
    // console.log('prior OSHA claim');
} else {
    alert('knock knock. ya blew it.');
    // console.log('knock knock. ya blew it.');

}

alert('Thank you for letting me run you through some questions, ' + name + '!');

// Peter - when we get arrays, try using one variable 
// and cycling the prompts and logs as strings? 10/29/19
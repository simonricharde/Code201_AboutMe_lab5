"use strict";
var shorBio = 'My name is SIMON RICHARD ESWARAMOORTHY, I have 7 years experience as Workday Integration Consultant and overall 10 years experience in software development. Worked on 6 End-to-End implementations in Workday. Currently in Seattle, WA location. Kindly reach me @ 609-XXX-XXXX';
var correctAnswerscount = 0;
var name = '';

while (name.length < 1) {
    name = prompt('What is your name?');
}


console.log('Name:', name);
if (name.length > 0) {
    alert('Hi ' + name + '!. Let\'s play some Guessing Game');
}

var question2 = 'Am I 6 Feet Tall? Say Yes/No';
var expectedValue1 = 'no';
var expectedValue2 = 'n';
var correctMessage = 'Amazing! I am not 6 feet tall';
var wrongMessage = 'Nooooo!!! I am not 6 feet tall ';
var answer2 = promptUser(question2, expectedValue1, expectedValue2, correctMessage, wrongMessage);

var question3 = 'I like Coding? Say Yes/No';
expectedValue1 = 'yes';
expectedValue2 = 'y';
correctMessage = 'Yesssss! I like coding, I\'m techie for 12 years';
wrongMessage = 'Hey that\'s not correct.  I\'m techie and I like coding';
var answer3 = promptUser(question3, expectedValue1, expectedValue2, correctMessage, wrongMessage);

var question4 = 'My current location is Seattle? Say Yes/No';
expectedValue1 = 'yes';
expectedValue2 = 'y';
correctMessage = 'Unbelievable! I am in Seattle';
wrongMessage = 'That\'s wrong!!!';
var answer4 = promptUser(question4, expectedValue1, expectedValue2, correctMessage, wrongMessage);

var question5 = 'Is my hobby watching Movies? Say Yes/No';
expectedValue1 = 'yes';
expectedValue2 = 'y';
correctMessage = 'You Are A Genius! Who don\'t like Movies';
wrongMessage = 'You\'re Wrong, how do I pass my time without movies';
var answer5 = promptUser(question5, expectedValue1, expectedValue2, correctMessage, wrongMessage);

var question6 = 'Do I like Cooking? Say Yes/No';
expectedValue1 = 'no';
expectedValue2 = 'n';
correctMessage = 'You would be right! I dont know why anyone enjoy cooking';
wrongMessage = 'You are wrong, cooking is awful and I hate it';
var answer6 = promptUser(question6, expectedValue1, expectedValue2, correctMessage, wrongMessage);


var luckyNumber = 0;

while (luckyNumber < 10 && luckyNumber === 0) {
    luckyNumber = parseInt(prompt('Can you guess my Lucky Number? Between 1 and 10'));
    
    while (isNaN(luckyNumber) || luckyNumber === null) {
        luckyNumber = parseInt(prompt('Can you guess my Lucky Number? Between 1 and 10'));
    }
    if (luckyNumber !== 7) {
        alert('Sorry. One more chance to guess..'); 
        luckyNumber = parseInt(prompt('Can you guess my Lucky Number? Between 1 and 10'));
                
    }
}
console.log('luckyNumber:', luckyNumber);
if (luckyNumber === 7) {
    alert('Fantastic. 7 is my Lucky Number');
    correctAnswerscount = correctAnswerscount + 1;
} else {
    alert("No, Wrong guess");
}

var stateLived = ['New Jersey', 'New York', 'California', 'North Carolina', 'Florida'];
var stateAnswer = prompt('Can you guess a state that I have lived in besides Washington?');
var flag;

for (var i = 0; i < stateLived.length; i++) {
    console.log('current iteration:', stateLived[i]);

    if (stateAnswer.toUpperCase() === stateLived[i].toUpperCase()) {
        correctAnswerscount = correctAnswerscount + 1;
        alert('Hey, You got it right!  You scored ' + correctAnswerscount + ' out of 7');
        flag = true;
        break;
    } else {
        alert('That\'s not right!  One more chance to guess...');
        stateAnswer = prompt('Can you guess a state that I have lived in besides Washington?');
        for (var j = 0; j < stateLived.length; j++) {
            if (stateAnswer.toUpperCase() === stateLived[j].toUpperCase()) {
                correctAnswerscount = correctAnswerscount + 1;
                alert('Hey, You got it right!  You scored ' + correctAnswerscount + ' out of 7');
                flag = true;
                break;
            }
        }
            break;
    }
}

if (!flag) {
    alert('No, Not Right!  You scored ' + correctAnswerscount + ' out of 7');
}

function promptUser(question, expectedValue1, expectedValue2, correctMessage, wrongMessage) {
    var answer = '';
    while (answer.length < 1) {
        answer = prompt(question);
        while (answer.length > 0 && !(answer.toUpperCase() === 'yes'.toUpperCase()
            || answer.toUpperCase() === 'y'.toUpperCase()
            || answer.toUpperCase() === 'no'.toUpperCase()
            || answer.toUpperCase() === 'n'.toUpperCase())) {
            answer = prompt(question);

        }

    }
    if (answer === expectedValue1 || answer === expectedValue2) {
        alert(correctMessage);
        correctAnswerscount = correctAnswerscount + 1;
    }
    else {
        alert(wrongMessage);
    }
    return answer;
}
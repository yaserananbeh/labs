'use strict';
let score= 0 ;
let theEndScore = document.getElementById('theEndScore');
let thePercentage = document.getElementById('thePercentage');
let userName =prompt('Welcome My friend Let\'s see if you know information about the website\'s author Firstly Enter Your name please ').toUpperCase();
console.log('The user Name Is : ' + userName); //greeting message

// alert contains the instructions
alert('Welcome Mr/Ms : '+ userName +'\nPLEASE ANSWER The Upcoming Questions WITH "YES" OR "NO" ONLY, don\'t worry about the letters case ');
let firstQuestion= prompt('Do you think My name is Yaser  (Yes/No)?').toUpperCase();

//while loop to insure the user inputs just yes or no
while(firstQuestion !== 'YES' && firstQuestion!== 'NO'){
  firstQuestion= prompt('Do you think My name is Yaser  (Yes/No)?').toUpperCase();
}
//print out the the respose in the console
console.log('first Question answer Is : '+ firstQuestion);
// if statment to alert messages depends on user input
if(firstQuestion==='YES'){
  console.log('You got the right answer');
  alert('You got the right answer');
  score++;
}
else{
  console.log('Really, You Killed me (WRONG) ');
  alert('Really, You Killed me (WRONG) ' );
}

let secondQuestion= prompt('Do you think my age is  65 years old like "Bill Gates" (Yes/No)?').toUpperCase();

while(secondQuestion !== 'YES' && secondQuestion!== 'NO'){
  secondQuestion= prompt('Do you think my age is  65 years old like "Bill Gates" (Yes/No)?').toUpperCase();
}
console.log('Third Question answer Is : '+ secondQuestion);

if(secondQuestion==='NO'){
  console.log('You got the right answer');
  alert('You got the right answer');
  score++;
}
else{
  console.log('Really, You Killed me (WRONG) ');
  alert('Really, You Killed me (WRONG) ' );
}

let thirdQuestion= prompt('My favorite color is mshmeshi ! (Yes/No)?').toUpperCase();
while(thirdQuestion !== 'YES' && thirdQuestion!== 'NO'){
  thirdQuestion= prompt('My favorite color is mshmeshi ! (Yes/No)?').toUpperCase();
}
console.log('Third Question answer Is : '+ thirdQuestion);
if(thirdQuestion==='NO'){
  console.log('You got the right answer');
  alert('You got the right answer');
  score++;
}
else{
  console.log('Really, You Killed me (WRONG) ');
  alert('Really, You Killed me (WRONG) ' );
}
let fourthQuestion= prompt('Do you think my favorite dish is "Molokhia" (Yes/No)?').toUpperCase();
while(fourthQuestion !== 'YES' && fourthQuestion!== 'NO'){
  fourthQuestion= prompt('Do you think my favorite dish is "Molokhia" (Yes/No)?').toUpperCase();
}
console.log('Fourth Question answer Is : '+ fourthQuestion);
if(fourthQuestion==='YES'){
  console.log('You got the right answer');
  alert('You got the right answer');
  score++;
}
else{
  console.log('Really, You Killed me (WRONG) ');
  alert('Really, You Killed me (WRONG) ' );
}

let fifthQuestion= prompt('Do you think I\'m a Pilot  (Yes/No)? ').toUpperCase();
while(fifthQuestion !== 'YES' && fifthQuestion!== 'NO'){
  fifthQuestion= prompt('Do you think I\'m a Pilot  (Yes/No)? ').toUpperCase();
}
console.log('Last Question answer Is : '+ fifthQuestion);

if(fifthQuestion==='NO'){
  console.log('You got the right answer');
  alert('You got the right answer');
  score++;
}
else{
  console.log('Really, You Killed me (WRONG) ');
  alert('Really, You Killed me (WRONG) ' );
}

/*End the code that responsible about asking the user */

alert('your score is : '+ score);
theEndScore.innerHTML= score;
thePercentage.innerHTML=score*20+'%';





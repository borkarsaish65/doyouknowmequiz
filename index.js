

var readlinesync = require('readline-sync');


var chalk = require('chalk');


var userName = readlinesync.question("What is your name ?");


console.log(chalk.green('Welcome ')+chalk.yellowBright(userName)+'!');



console.log('');
console.log('Welcome to '+chalk.bold.bgRed('Saish')+chalk.bold.red.bgWhite("Borkar's")+chalk.bold.bgRed(' Best Friend') + ' Quiz!');

console.log('');
console.log('');
console.log('');



console.log(chalk.whiteBright.bgYellow('You need to score at least 12 to be considered as my best friend!'));

console.log('');




console.log('*************'+chalk.bold.green.bgBlack('Wakanda Forever!')+'*****************');








var score = 0; 

 // console.log(chalk.bgYellow('Your Final Score is',score));

function incrementIfCorrect(userAns,correctAns)
{
 // console.log(userAns,correctAns);

var answer_lowercase = userAns.toLowerCase();
if(answer_lowercase == correctAns.answer.toLowerCase() || answer_lowercase == correctAns.answer2.toLowerCase() ||
answer_lowercase == correctAns.answer3.toLowerCase())
{

score++;
console.log(chalk.green('Correct!'));
}
else
{
  console.log(chalk.red('You got that wrong! Correct Answer is '+correctAns.answer));
}
console.log('');
console.log('Your current score is ',score);



}



// var answerOne = readlinesync.question(questionOne.question);

// incrementIfCorrect(questionOne,answerOne);


// console.log(score);



var questions  = [
questionOne  = {

  question:'Where do I stay(Tell the city at least) ?',
  answer:'Margao',
    answer2:'Fatorda',
  answer3:'Ambaji'
  
}
,
questionTwo = {
  question:'What year did I complete my graduation',
  answer:'2019',
   answer2:'null',
  answer3:'null'
},
questionThree = {
  question:'What is my favourite meat to eat ?',
  answer:'chicken',
   answer2:'null',
  answer3:'null'

}
,
questionFour  = {

  question:'How old am I ?',
  answer:'23',
   answer2:'null',
  answer3:'null'
}
,
questionFive = {
  question:'How many siblings do I have ?',
  answer:'one',
   answer2:'1',
  answer3:'null'
},
questionSix= {
  question:"Did I have backlogs in my engineering couse ?",
  answer:'Yes',
  answer2:'lots',
  answer3:'null'

},
questionSeven = {

  question:"Which is my favourite color ?",
  answer:'blue',
   answer2:'sky blue',
  answer3:'null'
}
,
questionEight = {
  question:"What day of the week do I strictly eat only vegetaraian food  ?",
  answer:'Tuesday',
   answer2:'null',
  answer3:'null'
},
questionNine = {
  question:'Do I have a girlFriend ?',
  answer:'no',
   answer2:'null',
  answer3:'null'

},
questionTen = {
  question:'Which bike do I use for daily travelling ?',
  answer:'activa',
   answer2:'honda activa',
  answer3:'null'

}
,
questionEleven = {
  question:"What is my father's name ?",
  answer:'Ramesh Borkar',
   answer2:'ramesh',
  answer3:'null'

}

,
questionTwelve = {
  question:'Who is my favourite cousin ?',
  answer:'purva',
   answer2:'purva borkar',
  answer3:'null'

}

,
questionThirteen = {
  question:'What kind of movies do I like ?',
  answer:'superhero',
   answer2:'marvel',
  answer3:'mcu'

}

,
questionFourteen = {
  question:'Which game did I played for my high school ?',
  answer:'chess',
   answer2:'null',
  answer3:'null'

}

,
questionFifteen = {
  question:'Which company do I currently work for ?',
  answer:'TLC',
   answer2:'The legal capsule',
  answer3:'legal capsule'

}




];




for(var i=0;i<questions.length;i++)
{

  var userAns = readlinesync.question(questions[i].question);
console.log('');
  incrementIfCorrect(userAns,questions[i]);
console.log('***********************************');

}

console.log(''
)

console.log(''
)

console.log(''
)

console.log(''
)
  console.log(chalk.bgYellow('Your Final Score is',score));



if(score <= 5)
{

  console.log(chalk.red.bgWhite('ehh ! we are just good friends'));
}
else if(score == 6 || score <=11)
{


 console.log(chalk.red.bgWhite('hurray! We are great friends!'));

}
if(score >= 12)
{

console.log('You are my best friend ! and I am blessed to have in my life!')

}


// console.log(chalk.bold.rgb(10, 100, 200)('Hello ') + chalk.green('Saish!'));





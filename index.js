// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *  - In counter1, count is defined within the counterMaker function. In the code for counter2, count is defined globally.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *  - Both counter1 and counter2 use closure. In counter1, the function defined within the high order function is a use case of closure. In counter2, the definition of the function references a variable outside of what would normally be its limited scope.
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *  - counter1 would be preferrable if the rest of the program did not need count to be within its scope and also to use the counter function elsewhere in the program and to save memory/ make it more effecient. counter2 would be prefferable if count needed to be defined globally so that other parts of the program could use it and or modify it directly.
 *
*/



// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();



// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

 let points = Math.floor(3 * Math.random());

 return points;

}

//console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, numOfInnings){

  let final = {
    
    home: numOfInnings * cb(),

    away: numOfInnings * cb(),
  };

  return final;

}

//console.log(finalScore(inning, 9));





/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(cb, numOfInnings) {
   
  
  let scores = {
    home: 0,
    away: 0,
  };

  for (let i = 0; i < numOfInnings; i++) {

    scores.home += cb();
    scores.away += cb();

    console.log((i + 1) + 'st inning: ' + scores.home + ' - ' + scores.away);
  }

  
}

scoreboard(inning, 9);


// Code your solutions in this file
 for (let age = 30; age < 40; age++ ) {
     console.log(`I'm ${age} years old. Happy birthday to me!`);
 }
 
 //-------------------------------------------------------------------------

 const gifts = ["teddy bear", "drone", "doll"];
 
 function wrapGifts(gifts) {
     for (let i = 0; i < gifts.length; i++) {
         console.log(`Wrapped ${gifts[i]} and added a bow!`);
     }
 
     return gifts;
 }
 
 wrapGifts(gifts);
//-------------------------------------------------------------------------------------

// writeCards() 
// accepts two arguments, an array of string names and an event name 
// create a for loop with a counter that starts at 0 and increments at the end of each loop 
// for loop should stop once it has iterated over the length of the array. 
// You will collect them in a new array and return this array at the end of the function 
function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

//----------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
// write a function countdown, that takes in any positive integer and, starting from 
// the last number, counts down to zero using console.log(). 
// note: that this means running countdown(10); would actually log 11 times 
// invokes console.log once for each number, counting down from the number provided to zero 
// logs each number when counting down, starting from the number provided 
function countDown( startingNumber ) { 
    while ( startingNumber > 0) {
        console.log( startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}
    countDown(10);


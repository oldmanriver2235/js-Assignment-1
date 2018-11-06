import lastDayIsFriday from './lib.js';

// returns a number
console.log(typeof(lastDayIsFriday(1901, 2000)) === 'number',

//returns 171 when between 1901 and 2000
console.log(lastDayIsFriday(1901, 2000)) === 171,

//returns 200 when between 1991 and 201
console.log(lastDayIsFriday(1901, 2017)) === 200,

//returns 1 when 1991 
console.log(lastDayIsFriday(1991))=== 1)
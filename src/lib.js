/*
We all love fridays, and even better if it is the last day of the month!

In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

Your work is to return the number of times a month ends with a Friday.

If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

For example, between 1901 and 2000, a month ends on Friday 171 times.

*/
function lastDayIsFriday(initialYear, endYear) {

    var totalFridays = 0;
   
   // if only one year is provided, all data is simply gathered from that year
     if (endYear === undefined) {
       endYear = initialYear;
     }
   //first for loop incrementing the year from initial to end by one
     for (var year = initialYear; year <= endYear; year++) {
     
     //second for loop incrementing the month starting with 1(jan) to 12(dec)
       for (var month = 1; month <= 12; month++) {
       
       //friday is the 5th day in the week, so every time the date calculator sees a 5 in the day spot the 
       //if statement below will add one to the total fridays variable
       var d = new Date(year, month, 0);
         if (d.getDay() === 5) {
           totalFridays++;
         }
       }
     }
     
     return totalFridays;
   }
   export default lastDayIsFriday
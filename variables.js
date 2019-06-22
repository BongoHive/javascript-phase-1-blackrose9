//javascript-phase-1-blackrose9

//---------------------------Question1---------------------------------------//
var birthYear = 1996; //this code declares the variable 'birthYear' and assigns the value '1996' to it.
var futureYear = 2066;

var possibleage1; //declares a variable 'possibleage1
var possibleage2;

possibleage1 = futureYear - birthYear; //calculates my possible age in the future year according to my birth year. Eg. 21yrs
possibleage2 = possibleage1 - 1; //calculates my second possible page within the future year. Eg. 20yrs before turning 21yrs

//outputs to the console
console.log("Question 1");
console.log("First possible age is " + possibleage1); 
console.log("Second possible age is " + possibleage2);


//-------------------------Question2-----------------------------------------//
var currentAge = 22; //declares a variable 'currentAge' and assigns the value 22 to it
var maxAge = 66;
var wingsPerDay = 24;

//the code below declares a variable, assigns an expression which calculates a value
var wingsPerYear = wingsPerDay * 365; //multiplies wingsPerDay by 365 days in a year

var totalwingcount = (maxAge - currentAge) * wingsPerYear; //calculates the total wings eaten from now till maxAge

//outputs to the console
console.log("Quesion 2");
console.log("You will need " + " " + totalwingcount + " " + "to last you until the ripe old age of" + " " + maxAge);

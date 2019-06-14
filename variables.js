//javascript-phase-1-blackrose9
function ageCalculator() { //declares a function
    var thisYear = 2019; //this code declares the variable 'thisYear' and assigns the value '2019' to it.
    var birthYear = 1996;
    var futureYear = 2066;
    
    var possibleage1; //declares a variable
    var possibleage2;

    possibleage1 = futureYear - birthYear; //assigns value to variable
    possibleage2 = futureYear - thisYear;

    console.log("First possible age is " + possibleage1); //outputs to the console
    console.log("Second possible age is " + possibleage2);

}

function foodCalculator(){
    var currentAge = 22; //declares a variable and assigns a value to it
    var maxAge = 66;
    var wingsPerDay = 24;
    
    //the code below declares a variable, assigns an expression which calculates a value
    var wingsPerYear = wingsPerDay * 365; //multiplies wingsPerDay by 365 days in a year

    var totalwingcount = (maxAge - currentAge) * wingsPerYear; //calculates the total wings eaten from now till maxAge
    
    //outputs to the console
    console.log("You will need " + " " + totalwingcount + " " + "to last you until the ripe old age of" + " " + maxAge);

    //outputs to HTML element with ID = 'outputq2'
    document.getElementById("outputq2").innerHTML = ("You will need " + " " + totalwingcount + " " + "to last you until the ripe old age of" + " " + maxAge);
}
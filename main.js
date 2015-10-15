// 1.  Log your last name to the console.


console.log("Kyle Maxwell");

// 2.  Declare a variable called "movie" and log it to the console.


var movie = "fired up";

console.log(movie);

// 3.  Declare three variables with integer values. Add the first two, then multiply that sum by the third.


var number1 = 7;
var number2 = 3;
var number3 = 4;
var add = number1 + number2;
var multiply = number3 * add;

console.log(multiply);

// 4.  Declare two variable with string values. Declare a third varible that concatenates the first two.


var string1 = "hello";
var string2 = "world";
var combine = string1 + ' ' + string2;

console.log(combine);

// 5.  Prompt a user to enter a number. Multiply that by 100.

var ask = prompt("Enter a Number");
alert(ask*100);


// 6.  Prompt a user to enter his/her name, favorite band, and the year they were born. Log the sentence:
//     "My name is ______, and I'm ___ year old fan of ________."

var name = prompt("What is your name?");
var band = prompt("What is your favorite band?");
var year = prompt("When were you born?");

alert("My name is " + name + ", and Im " + year + " year old fan of " + band + ".");

// 7.  Create an alert that uses the response from a prompt.


var prompt1 = prompt("What is your favorite object?");

alert("Oh no way, " + prompt1 + " is mine too!");

// 8.  Declare an array with six items. Do this two different ways.


var array1 = ['thing1', 'thing2', 'thing3', 'hing4', 'thing5', 'thing0'];

var colors = [
  "black",
  "yellow",
  "red",
  "white",
  "blue",
  "purple"
];


// 9.  Add two additional items to the beginning of the array.

colors.unshift('Aqua', 'Mustard');


// 10. Remove the last two items.

colors.pop();
colors.pop():


// 11. Add one item between the 2nd and 3rd item.

colors.splice(2,0, "Burgundy");


// 12. Combine all of the elements of the array into a string.

colors.join();


// 13. Arrange the items alphabetically.

colors.sort();


// 14. Create and array of three arrays: colors, names, and schools. Each inner array should have three items.

var colors = ['yellow', 'blue', 'green'];
var names = ['fred', "jon", "larry"];
var schools = ["CSU", "CU", "DU"];

var multiplearrays = [colors, names, schools];
console.log(multiplearrays);


// 15. Remove the last item from the second array.

multiplearrays.names.pop();


// 16. Declare an object called "car" that describes the make, model, and color of your car.

var car = {
  make: 'Subaru',
  model: 'Legacy',
  color: 'grey',
};


// 17. To the car object, add the key/value pair describing the year of your car.

car.year = 2011;


// 18. The the car object, add a "repairs" key with the value being an array of the last three items you fixed on the car.

car.repairs = ['Tires', 'Oil', 'Bumper'];


// Use the following object for questions 19-25:
guests = {
  "joe": {
    first_name: "Joe",
    last_name: "Jenkins",
    preferences: {
      meal: "meat",
      favorite_genres: ["jazz", "soul"],
    },
    sitting_next_to: "sue",
    correspondence: [
      {date: "11/4/2014", description: "sent invitation"},
      {date: "12/2/2014", description: "replied yes"},
    ],
  },
  "sue":{
    first_name: "Sue",
    last_name: "Summers",
    preferences: {
      meal: "fish",
      favorite_genres: ["funk", "blues"],
    },
    sitting_next_to: "joe",
    correspondence: [
      {date: "11/7/2014", description: "sent invitation"},
      {date: "12/8/2014", description: "replied yes + 1"},
    ],
  },
}

// 19. Find Joe's last name.

guests.joe.last_name;


// 20. Log to the console the first genre each person listed.

var joegenre = guests.joe.preferences.favorite_genres[0];
var suegenre = guests.sue.preferences.favorite_genres[0];

console.log(joegenre, suegenre);


// 21. Find the first name of the person sitting next to Joe.

var nextjoe = guests.joe.sitting_next_to;

console.log(nextjoe);


// 22. Find what meal Sue will be eating.

var suemeal = guests.sue.preferences.meal;

console.log(suemeal);


// 23. Find the date of the first correspondence with Joe.

var firstjoe = guests.joe.correspondence[0];

console.log(firstjoe);


// 24. find the desciption of the last correspondence with Sue.

var lastsue = guests.sue.correspondence[1];

console.log(lastsue);


// 25. Create a string uses variables to read:
//     "As of [date of Joe's last correspondence], [Joe's first name] [Joe's last correspondence description].
//      He will be eating [Joe's meal choice] while listening to [Joe's first favorite genre] and [Joe's second favorite genre]
//      and sitting next to [Sue's first name][Sue's last name]."

var joeans = guests.joe.correspondence[1].date;
var joe1 = guests.joe.first_name;
var joelast = guests.joe.correspondence[1].description;
var joemeal = guests.joe.preferences.meal;
var joemusic = guests.joe.preferences.favorite_genres[0];
var joemusic2 = guests.joe.preferences.favorite_genres[1];
var suename = guests.sue.first_name;
var suelast = guests.sue.last_name;

console.log("As of " + joeans + ", " + joe1 + " " + joelast + ". He will be eating " 
  + joemeal + " while listening to " + joemusic + " and " + joemusic2 + " and sitting next to " 
  + suename + " " + suelast);


// 26. Create an object with both Literal Notation and Constructor.

var phone  = {
manufacturer: "apple",
model: 'iphone5',
color: 'black',
};

var computer = new Object();

computer.manufacturer = 'Apple';
computer.model = 'MacBookPro';
computer.color = 'grey';


// 27. Output each item in the following Array to your console:
var bedroom = ['bed', 'nightstand', 'television', 'Channing Tatum']

for(i=0;i<bedroom.length;i++){
  var shit = bedroom[i];
  console.log(shit);
}


// 28. Log to the console numbers 25 to 85, only in increments of 15.

var number = 25;
while(number < 85){
  number += 15;
  
}
// 29. Write a while loop that logs "This loop is number: ___" to the console 5 times. Use your counter to fill in the blank.
// 30. Use a for loop to rewrite #29.
// 31. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
// 32. Use Math.floor and Math.random to roll two six sided dice for two players. Determine which player wins with the higher roll.
// 33. Define a function called "divideByThree". It should accept one parameter called "number".
//     The function should divide the number by three and output the answer.
//     If the number is not divisible by three with a remainder of zero, alert the user that their number is invalid.
// 34. Write a function that accepts the following array and separates the people into men and women.
//     HINT: The men are even and the women are odd.
       battingLineUp= ["Henry", "Shirley", "Mark", "Tina", "Max", "Sara", "Eric", "Lisa", "Ralph", "Connie", "Drew"]
// 35. Prompt a user to enter their phone number. Write a function that outputs their phone number in a pretty format like:
//     (555) 883-3985
//     Alert the user if they have entered anything except a 10 digit number.
// 36. Write a helpufl tipping function that accepts two parameters, the bill amount and service score based on a scale of 1-10.
//     The output should be the bill, the tip, and the total amount.
//     Service score 1-3 denotes a 10% tip. 4-6 = 15%, 7-9 = 20%, 10 = 50%.
// 37. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
       arrayOfSchtuff = ["four", 55, {myDog: "Scranton"}, "fifty-one", 21, 398577729, "3,333"]
// 38. Use a function to ask a user for a US Dollar amount and converts it to Canadian Dollars.
// 39. Add the option of converting to Euros. First ask the user which currency they want the conversion for, then ask for the dollar amount.
// 40. Write a function that returns an object of duplicate letters in an string.
//     "Baby Aaron" should return {"b":2, "a":3}
// BONUS: Write a function named pluralize that takes 2 arguments, a noun and a number. It returns the number and pluralized form, like "5 cats" or "1 dog".
//        Make it handle a few collective nouns like "sheep" and "geese"
//
// =========================== jQuery =========================
// 41. Add the jQuery CDN script to index.html
$(document).ready(function(){

// 42. Turn the square into a circle.

// 43. When the 'Fade' button is clicked, have your circle fade in/out with any speed you like.
//     Hint: http://api.jquery.com/fadetoggle/

// 44. Put your name on the page.

// 45. Add some flair to your name when you click the 'Stylize!' button.
//     Feel free to edit the HTML however you see fit.

// 46. Create as many pacman clones as you see fit.

// 47. Add the class 'invisible' to each list item when they are hovered over.

// 48. When either square is clicked, have them swap colors.

// 49. When you click the vertical button, the squares above should align vertically.

// 50. Unhide the message.

});

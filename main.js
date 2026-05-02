/*
Task 1: Create the Order System
Create two arrays:
● The drinks array stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
● The pastry array stores three pastry orders (e.g., “Croissant”, “Muffin”,
“Bagel”).
*/
let drinksArr = ["Latte","Tea","Espresso"];
let pastryArr = ["Croissant","Muffin","Bagel"];
/*
Task 2: Log the number of drinks and number of pastries by using .length on each
row.
*/
console.log(drinksArr.length);
console.log(pastryArr.length);
/*
Task 3: Access Orders Using Bracket Notation
Use bracket notation to log a specific drink and a specific pastry using
hardcoded numbers. For example, you might want to log the first drink and last
pastry. Do this for three combinations.
*/
console.log(`first drink: ${drinksArr[0]} and first pastry ${pastryArr[0]}`);
console.log(`second drink: ${drinksArr[1]} and second pastry ${pastryArr[1]}`);
console.log(`third drink: ${drinksArr[2]} and third pastry ${pastryArr[2]}`);
/*
Task 4: Access Orders Dynamically with Variables
*/
let drinkOrder = 0;
let pastryOrder = 0;
console.log(`Your Drink order is: ${drinksArr[drinkOrder]} and Pastry order is: ${pastryArr[pastryOrder]}`);
/*

Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
dynamically adjusts to the number of items using .length.
*/
for (i = 0; i < drinksArr.length; i++){
  console.log(drinksArr[i]);
}
/*
Task 6: Add a New Order & Track Length
1
Suppose a new order has been placed: a customer ordered a flat white. Add “flat
white” to the drinks category dynamically. Log the updated number of drinks after
the addition.
Declare two variables and use them with bracket notation to log the selected order
dynamically.
*/
drinksOrder = 3;
pastryOrder = 3;
drinksArr.push("flat white");
pastryArr.push("donut")
console.log(drinksArr.length);
console.log(`New Menu Items: ${drinksArr[drinksOrder]} coffee and ${pastryArr[pastryOrder]}`);

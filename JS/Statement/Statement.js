/*
🔹 Level 1: Simple
Check if a number is positive. If yes, print "Positive".
Check if age is 18 or more. If yes, print "Adult", otherwise print "Minor".
Given marks, print the grade:
90 or more: Grade A
75 to 89: Grade B
50 to 74: Grade C
Less than 50: Fail
Print the name of the day based on number (1 = Sunday, 2 = Monday, ..., 7 = Saturday).
🔹 Level 2: Medium
Check if a number is positive and less than 10. If yes, print "Small positive number".
Check if a number is even or odd.
Print age group:
0 to 12 → Child
13 to 19 → Teen
20 to 59 → Adult
60 or more → Senior
Print a message based on user choice:
1 → Start
2 → Stop
3 → Pause
Any other number → Invalid
🔹 Level 3: Hard
Check if a given year is a leap year.
Find the biggest number among three numbers.
Based on grade (A, B, C, D), print:
A or B → Excellent
C → Good
D → Needs Improvement
Anything else → Invalid Grade
Make a simple calculator:
Take two numbers and an operator (+, -, *, /)
Print the result based on the operator
*/

console.log("////Easy////////");
// question1:-Check if a number is positive. If yes, print "Positive".
var num = -1;
if (num >= 0) {
  console.log("Positive");
}
//question2:-Check if age is 18 or more. If yes, print "Adult", otherwise print "Minor".
var age = 19;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
/*question-3:-Given marks, print the grade:
90 or more: Grade A
75 to 89: Grade B
50 to 74: Grade C
Less than 50: Fail */

var marks = 89;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75 && marks < 90) {
  console.log("Grade B");
} else if (marks >= 50 && marks < 75) {
  console.log("Grade c");
} else if (marks < 50) {
  console.log("Fail");
} else {
  console.log("Enter Valid Number");
}
//Print the name of the day based on number (1 = Sunday, 2 = Monday, ..., 7 = Saturday).
var number = 9;
switch (number) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Not a correct Value");
}
console.log("/////Medium");

//question-1:-Check if a number is positive and less than 10. If yes, print "Small positive number".

var pnum = 18;

if (pnum >= 0 && pnum < 10) {
  console.log("Small positive number");
}
//question 2:-Check if a number is even or odd.

var eonum = 19;
if (eonum % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is odd");
}
/*
Print age group:
0 to 12 → Child
13 to 19 → Teen
20 to 59 → Adult
60 or more → Senior
*/

var age = 140;

if (age >= 0 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teen");
} else if (age >= 20 && age <= 59) {
  console.log("Adult");
} else if (age >= 60) {
  console.log("Senior");
} else {  
  console.log("Enter Valid Number");
}

//Find the biggest number among three numbers.

var a = 2100;
var b = 2100;
var c = 32;

if (a >= b && a >= c) {
  console.log("A is biggnest number", a);
} else if (b >= a && b >= c) {
  console.log("B is Biggest Number", b);
} else {
  console.log("C is Biggest Number", c);
}
/*
Based on grade (A, B, C, D), print:
A or B → Excellent
C → Good
D → Needs Improvement
Anything else → Invalid Grade 
 */

var grade = "E";

switch (grade) {
  case "A":
  case "B":
    console.log("Excellent");
    break;
  case "C":
    console.log("Good");
    break;
  case "D":
    console.log("Needs Improvment");
    break;
  default:
    console.log("Invalid Grade");
}
/// question
let grade1 = 11;
// Write your code here
if (grade1 >= 25 && grade1 <= 30) {
  console.log("Grade A");
} else if (grade1 >= 20 && grade1 < 25) {
  console.log("Grade B");
} else if (grade1 >= 15 && grade1 < 20) {
  console.log("Grade c");
} else if (grade1 >= 10 && grade1 < 15) {
  console.log("Grade D");
} else if (grade1 >= 5 && grade1 < 10) {
  console.log("Grade E");
} else if (grade1 >= 0 && grade1 < 5) {
  console.log("Grade F");
}
//question

var s = "ram";

var fc = s[2];

switch (fc) {
  case "a":
  case "e":
  case "i":
  case "0":
  case "u":
    console.log("A");
    break;
  case "b":
  case "c":
  case "d":
  case "f":
  case "g":
    console.log("B");
    break;
  case "h":
  case "j":
  case "k":
  case "l":
  case "m":
    console.log("C");
    break;
  case "n":
  case "p":
  case "q":
  case "r":
  case "s":
  case "t":
  case "v":
  case "w":
  case "x":
  case "y":
  case "z":
    console.log("D");
    break;
  default:
    console.log("invalid")
    break;
}
alert("your subscription is ended next 2 days");
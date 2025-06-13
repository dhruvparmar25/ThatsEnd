/*
for loop
*/
//question 1:Print numbers from 1 to 10 using for loop.
for(num=1; num<=10; num++){
    console.log("Number: "+num)
}//question 2:Find the sum of numbers from 1 to 100.
let sum =0
for(numbers=1; numbers<=100; numbers++){
sum=sum+numbers;
}
console.log("sum: "+sum)
//question-3: Print even numbers between 1 and 20

for(i=0; i<=20; i++){
   if (i%2==0) {
    console.log("Even :"+i)
   }
}

//question-4: Print numbers from 10 to 1 (reverse)

for(a=10; a>=1; a--){
    console.log("revese : ",a)
}

//question-5: Print squares of numbers from 1 to 5 → (1, 4, 9, 16, 25)

for(b=1; b<=5; b++){
    console.log(b+" squres "+b*b)
}

//question-6: Print the first 10 multiples of 3

for(c=1; c<=10; c++){
    console.log("3"+"*"+c+"="+c*3)
}

/*          

🔴 Level 3 (Hard):
Reverse a number (e.g. 123 → 321) using a loop

Check if a number is prime or not

Print all prime numbers between 1 and 100

Find factorial of a number using for loop

Print a pattern:
*/
//q-7 Calculate the sum of numbers from 1 to n (input n)

var n =10 ;
var sum1=0;
for(var d=1; d<=n; d++){
    sum1 +=d
   
}
console.log(sum1)
//q-8 Print the multiplication table of a given number
var mul=22
for(e=1; e<=10; e++){
    console.log(e+"*"+mul+"="+e*mul)
}
//q-9 Count how many numbers from 1 to 50 are divisible by 5
for(f=1; f<=50; f++){
if(f%5==0){
    console.log(f)
}
}
//q-10 Print all odd numbers between 1 and 30

for(f=1; f<=30; f++){
    if (f%2 !==0) {
     console.log("Odd :"+f)
    }
 }
 //q-11 Print all numbers between 1 to 100 that are divisible by 3 and 5

 for(g=1; g<=100; g++){
    if (g %3==0 && g%5==0) {
    console.log(g)
        
    }
 }

// q-12 reverse a number (e.g. 123 → 321) using a loop
// Reverse a number (e.g. 123 → 321) using a loop

// Check if a number is prime or not

// Print all prime numbers between 1 and 100

// Find factorial of a number using for loop

//  :


let j = 5;
for (let k = 1; k <= j; k++) {
    let str = "* ";
    console.log(str.repeat(k));
}   
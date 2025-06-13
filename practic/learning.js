/*
java csript is used to create intractive your web page.

Immpolortant topic for JS
 variable
 console.log
 document.write()
 typeof
 + operator 
  if-elseif-else
  confirm
 for
function 
class 
 array
 object
 multi dimensional array and object
 forEach
 typeof
*/
//console.log() is use to print value on console tab.
console.log("hello Guys today we start to learn Js.");
//document.writeIn() it is used to print data through js on web page.
document.write('Priti');
document.writeln('patel');
//.innerhtml = it is used to print inside a tag
document.getElementById('h-2').innerHTML = "PRITI PATEL";
//variable
/*
  whaat is variable?
    variable is a one type of storeg for data.
  How to create variable in JS?
    here 3 way to create variable.
     1] var variablename = value;
          you have to create variable using var key word then you can redecleare thats variable and change value for that. 
     2] let variablename = value;
         you have to creat variable usinng let key word then you can't redeclear this variable but you can change value using any assigment oparetor.

     3] const variablename = value;
         you have to create constant variable using const key word then it value is never change in whole program.
        you can'r redeclear this varible again.
        you can't change value using any assigment oparetor.
 rule
    it most important to use any one  key word let, var, or const.    
    you can't use space between variablename. you can use underscore or camale case for differentiation between varible name.
    you can not use special character or number as a first character for your variable.
    you can use only alphates or underscore as a first character.

*/
var Company_name = 'ThatsEnd Teachnology';
console.log(Company_name);
var Company_name = "ThatsEnd pvt ltd";
console.log(Company_name);
let Company_Manager = "Dileshsinh";
console.log(Company_Manager);
// let Company_Manager = "Harikrushna";
// console.log(Company_Manager);
let n = 2319;
n++;
console.log(n);
//const Company_Ceo = 'NiravRaj';
//console.log(Company_Ceo);
// var Company_Ceo = 'Harikrushna';
// console.log(Company_Ceo);
const pie = 3.14;
console.log(pie);
// pie++;
// console.log(pie);
// typeof() is a function is use to get data type
/*
  number  = you have numeric value with decimal point or without decimal pont it's data type's is known as number.
  string  = if you assign value using quate then it's data types is string. mostly it's contain character.
  boolean = it is only 2 possible value true or false it call boolean data type.
  array   = array is a collection of data. it is used to store multiple data in single variable. 
  object  = onject is a instance of class.
  null    = if variable value is null then it's data type is null.
*/
console.log(typeof(pie));
console.log(typeof(n));
console.log(typeof(Company_name));
var num = '4785';
console.log(typeof(num));
//console.log(Company_Ceo == 'Harikrushna');
//console.log(typeof(Company_Ceo == 'Harikrushna'));
//console.log(Company_Ceo == 'NiravRaj');
//console.log(typeof(Company_Ceo == 'NiravRaj'));
var arr = [43,65,32,21,4,66,45,88];
console.log(arr);
console.log(typeof(arr));
class myclass{
  name = 'Priti';
  sirname = 'Patel';
  address = 'bigri';

}
var obj = new myclass();
console.log(obj);
console.log(typeof(obj));
var num = null;
console.log(num);
console.log(typeof(num));
//operator
/*
   in java script different type of oparetor available.
       airthmatic oparetor = if we want to perform mathematical oparation then we can use airathmatic oparetor
         addition(+) = you want to addition 2 or more value then you can use (+) oparetor
         substraction(-) = you want to substract value into other value then you can use(-) oparetor
         multiplication(*) = you want to multiply two  value then you can use(*) oparetor
         division(/) = you want to divide value with other value then you can use(/) oparetor
         modules(%) = if you want to find reminder then you can use (%) oparetor.
         exponential oparetor(**) = exponential oparetor used to find out power of some value.
       comparision oparetor = if you want to compare 2 or more thing with each other then you can use comparision opatretor.
         lessthen oparetor(<) = you want to check some value is lesser or smaller then other value then you can use (<).
         lessthen or equalto (<=) = if you want to check some value is smaller or equal then you can use (<=).
         greaterthen oparetor(>) = you want to check some value is begger then other value the you can use (>). 
         greaterthen or equlto(>=) = you want to check some value is greater or equal then you can use (>=)
         equlto (==) = it is used to check two value is equal.
         notequal(!=) = it is used to check value is not simller
         identical oparetor(===) = it is used to check value and its data type both.
         not identical(!==) = it is use not identical value.
       logical oparator
          OR(||) = you have multiple condition and any one or all is true then result is true.
                   T  + T = T
                   T  + F = T
                   F  + T = T
                   F  + F = F
          AND(&&) = you have multiple condition and all condtion are true then result is true other wise result is false
                   T  + T = T
                   T  + F = F
                   F  + T = F
                   F  + F = F
          NOT(!) = it is use to convert your result into oposite result.
                   T  = F
                   F  = T
          assignment ooparetor
               = -> it is used to create new variable then you can use = oparetor
               += -> 
               -=
               *=
               /=
               %=

       array oparetor
        stribg oparetor
          concatination oparetor(+) =  this oparetor is use to join 2 or more string.
          concatination assignment oparetor(+=) =  if you have already assign value
           for variable and you want to concat with other string and assign value for same same variable then you can use (+=) oparetor.
        condition oparetor 
            turnary oparator(condition)?(value1):(value2);

*/
var a = 638;
var b = 3767;
var addition =  a + b;
console.log(addition);
var a = 14;
var expo = a**2;
console.log(expo);
var mod = a%5;
console.log(mod);
console.log(a<b);
console.log(b<a);
console.log(a>b);
console.log(b>a);
console.log(a<14);
console.log(a<=14);
console.log(a>14);
console.log(a>=14);
console.log(a==b);
console.log(a===b);
console.log(a=='14');
console.log(a==='14');
console.log('====logical oparetor');
console.log('OR Oparetor');
console.log(100>150 || 200<500);
console.log(100<150 || 200>500);
console.log(100<150 || 200<500);
console.log(100>150 || 200>500);
console.log('AND Oparetor');
console.log(100>150 && 200<500);
console.log(100<150 && 200>500);
console.log(100<150 && 200<500);
console.log(100>150 && 200>500);
console.log('Nor Oparetor');
console.log(!typeof(100)=="number");
console.log(100>150 || 200>500);
console.log(!(100>150 || 200>500));
console.log((!(100>150) || 200>500));
console.log(a);
a+=100;
console.log(a);
var fname = 'priti';
sirname = 'Patel';
var name =  fname+' '+sirname;
console.log(name);
Company_name = 'Thatsend';
console.log(Company_name);
Company_name+=' pvt ltd';
console.log(Company_name);
console.log(typeof(Company_Ceo));
var out = (typeof(Company_Ceo)!='undefined')?(Company_Ceo):('Priti');
console.log(out);
var arr = [23,44,35,77,43,68,99];
var arr1 = [43,23,35,77,34,69,89];
var arr2 = [43,23,35,77,34,69,89];
var arrUnion = arr+arr1;
console.log(arrUnion);
var arrequal = arr1 != arr2;
console.log(arrequal);
var Company_name = "ThatsEnd";
var Company_type = "pvt ltd";
console.log(Company_name+' '+Company_type);
var name = "druv";
name+=' parmar';
console.log(name);
//(conditon)?(value1):(value2);
var num = -12;
var data = (num>0)?('this value is positive'):('this value is nagetive');
console.log(data);
/*
   statement:
    1]if = we have only one statement or process and we want to exicute it according spacific condition then we can if statement.
       syntex: if(conditon){
          code;
       }
    2] if...else = we have 2 statement or process and exicute any one according to condition then we can use if...else.
         if(conditon){
           code1;
         }
           else{
            code2;
           }
    3] if...else if...else = if you have morethen 2 statement and exicute any one of them then you can use if...els if...else
       syntex: if(conditon){
         code1;
       }else if(condition){
        code2
       }else if(condition){
        code3
       }
        .
        .
        .
        else{
          codeN;
        }
    4] switch = it is work on variable value using different cases
        syntex: switch(variable)
        {
           case 1:
              process1;
              break;
           case 2:
              process2;
              break;
           case 3:
              process3;
              break;
              .
              .
              .
              default:
                processN;

        }
*/ 

var data = 234;
if(typeof(data)=='number'){
   data++;
}
console.log(data);
var data2 = 340;
if(data>data2){
  var substractvar = data - data2;
}else{
  var substractvar = data2 - data;
}
console.log(substractvar);
var age = 34;
if(age<=5){
  console.log("it's a baby child");
}else if(age>5 && age<18){
  console.log("it's call child");
}else if(age>18 && age<60){
  console.log("it's call younger");
}else{
  console.log("it's call older");
}
var fruits = 'mango';
switch(fruits){
  case 'Apple':
       console.log('Apple is a red color sweet fruits');
       break;
  case 'cherry':
        console.log("it is a healthy fruits for improve immunity");
        break;
  case  'mango':
        console.log('it is a king of fruits');
        break;
  case  'banana':
        console.log('it is a yellow collor long fruits');
        break;
   default:
       console.log('this fruits information is not available');                      
}

/*
   alert box and confirm box
*/
alert("your subscription is ended next 2 days");
if(confirm("are you want to renew your subscription?"))
{
  console.log('subscription form display');
}else{
   console.log("subscription process is tearminated");
}

/*
  Loop = loop is perfor repeated task in programing.
  How many types of loop?
    here 4 types of loop available.
      1] for loop
         syntex: for(intialvalue; conditon; process){
           code;
         }
      2] while loop
         syntex: while(condition){
            code;
            process;
         }
      3] do while
         syntex: 
            do{
              code;
              process;
            }while(condition);
      4] foreach loop
         syntex : Index : variablename.forEach((v)=> code);
                  associative: Object.Entrie(variablename).forEach(([k,v])=> code);


*/

for (a=15;a<=32;a++){
  console.log('Number: '+a);
}
for (a=0;a<=50;a+=5){
  console.log('Number: '+a);
}
console.log(age);
var  sallary = 8500;

while(age<=40){
 
    console.log('current saalry:'+sallary)
     var inc = (25*sallary)/100;
     console.log('this year increament:'+inc);
    sallary+=inc;
    age++;
}

var age1 = 20;
 var match = 0;

do{
  console.log('at the '+age1+' he played '+match+' match');
  match+=10;
  age1++;
}while(age1<=50);
arr.forEach((val)=> console.log('value: '+val));


arrtarinee = {'first':'priti patel','second':'dhruv parmar','third':'hari patel'}
Object.entries(arrtarinee).forEach(([K,v])=> console.log(K+'=>'+v));

/*
  what is function?
    function is a set of comand to perform perticuller process or task.
  How to create a function?
    without paremitter syntex: function function_name(){
       code ;
       return value;
    }
   with paremitter syntex: function(para-1,para-2,para-3 . . . ){
       code;
   }      
  How we can call function?
     without syntex: functionname();
     with syntex: function(val-1,val-2,val-3,. . . );
  How many types of function?
    here 2 type of function available.
    1] inbuilt function = it is perform fixed task.
    2] userdefine function = it is perform taskaccording to user requirement.
  defualt value argument
*/
/*without paramiter function*/
function Message(){
  console.log('Hello Guyes Good morning');
}
Message();
function Addition(){
  var a = 4627;
  var b = 9484;
  var res = a+b;
 // return res;

}
var out = Addition();
console.log('result of addition 2 value is '+out);


var p = 10000
function SimpleIntrest(P,R,N){
  var res = (P*R*N)/100;
  return res;
}
var out = SimpleIntrest(p,6.8,3);
console.log(out);
 p +=out;
 console.log(p);
function SimpleIntrest_1(P,N,R=7.5){
  var res = (P*R*N)/100;
  return res;
}
var out = SimpleIntrest_1(20000,2);
function incOparetion(){
  let number = 1001;
  
  return function(){
    number++;
    console.log(number);
  }
}
const res = incOparetion();

res();
res();
res();
res();
res();

//array= array is coolection of data we can use to store multiple value in single variable.
/*
   here 2 types of array avaialable
     1] index array = we only assign value for this array and it's key are aoutomatically ganereted from 0 to array_length-1
          How to create index array ?
           syntex: var arr = [value1, value2, value3, . . . ];
        How we can access single to array?
           syntex: variableofarray[key];   
     2] associative array= if we assign both key and value for array then it's call associative array
          syntex:= var arr = {'key1':value1, 'Key2':value2, 'key3':value3, .. . }
         How we can sccess single value from associative array?
           syntex: variableofarray['keyname'];
           variableofarray.keyname' 
*/ 

var cricketer_name = ['sachin','sehwag',['Rahl',['rohan','ritesh',['rehan','rakesh','raman']],'Raju'],'kohli','raina'];
console.log(cricketer_name);
var fruits = {'A':'Apple','B':{'B':'banana','B-1':'bery'}, 'C': 'Cherry','D':'Dragonfruits'};
console.log(fruits);
console.log(cricketer_name[3]+ ' is a great player of india');
console.log(fruits['D']);
console.log(fruits.C);

/*
  OOPs
  class : similler types of method collection with varible it's call class.
  how to create a class?
   syntex: class classname{
   variable;
   method;  
   code
   }
  What is object?
    object is a insatnce of class.
  How to create object?
    new classname();   
  How can I access class variable out side the class?
    objevariable.classvariablename;  
  How we can create method inside class?
    syntex: fuction_name(){
      code;
    }  
  How to access class method outside the class?
     syntex: objectvariable.methodname();
  How to use class variable inside the class method?
     syntex: this.variablename;
  How we can use class method inside class other?
     syntex: this.methodname();   
  what is constructor?
     constructer is a one type of megic method. so we can create object then constructor is automatically call

  Inheritance = we can use one class property into other class then it's call inheritance.
  childclass = you dirive some class using other class then it's call child class.
  How we can create a child class?
      class classname extends parentsclassname{
        code;
      }
  How we can call parents class constructor?
     Super();  
  How many access modyfier here?
     here 3 types of access modifier available.
       1] public
       2] protected(_variablename)
       3] private (#variable)
    */
class calculation{
  number_1 = 37682;
  number_2 = 36822;
  _number_3 = 3527;
  #number_4 = 6372;


  addTwoVAlue(){
    var res1 = this.number_1+this.number_2;
    return res1; 
  }
  averageof_2_number(){
   var res1 = this.addTwoVAlue()/2;
    return res1;
  }
  set_value(no1,no2){
     this.number_1 = no1;
     this.number_2 = no2;
  }
  
  constructor(){
     console.log('Construct method call successfully');
     console.log('same class output is '+this._number_3);
     console.log('same class output is '+this.#number_4);
  }
}
var objCalculation = new calculation();
console.log(objCalculation.number_1);
console.log(objCalculation.addTwoVAlue());
console.log(objCalculation.averageof_2_number());
console.log('outside then class result is '+objCalculation._number_3);
console.log('outside then class result is '+objCalculation.number_4);
 class substract extends calculation{
  constructor(){
      super();
      console.log('child class constructor is call');
      console.log('variable1:- '+this.number_1);
      console.log('variable2:- '+this.number_2);
      super.set_value(2435,2023);
     var sub = this.substract_2_value();
      console.log(sub+' is a result for substract 2 value method');
      console.log('child class result'+ this._number_3);
      console.log('child class result'+ this.number);
  }
  substract_2_value(){
    var res = this.number_1-this.number_2;
    return res;
  }

 }
var objsub = new substract();
console.log(objsub); 

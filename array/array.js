// var cricketer_name = ['sachin','sehwag','rohit','kohli','raina'];
// var cricketer_name = ['sachin','sehwag',['Rahl','Raydu','Raju'],'kohli','raina'];
var cricketer_name = ['sachin','sehwag',['Rahl',['rohan','ritesh',['rehan','rakesh','raman']],'Raju'],'kohli','raina'];
console.log(cricketer_name[3]+'  IS A Great player');
// var fruits = {'A':'Apple','B':'Banana', 'C': 'Cherry','D':'Dragonfruits'};
var fruits = {'A':'Apple','B':{'B':'banana','B-1':'bery'}, 'C': 'Cherry','D':'Dragonfruits'};
console.log(fruits.D);
console.log(fruits['C']);

 class calculation{
  number_1 = 37682;
  number_2 = 36822;
  _number_3 = 3527;
  #number_4 = 6372;
  addTwoVAlue(){
    var res = this.number_1+this.number_2;
    return res;
  }
  averageof_2_number(){
    var res = this.addTwoVAlue()/2;
    return res;
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
// console.log(objCalculation.number_1);
console.log(objCalculation.addTwoVAlue());
console.log(objCalculation.averageof_2_number());
// console.log('outside then class result is '+_number_3)
console.log('outside then class result is '+this.number_4)


class substract extends calculation{
   constructor(){
      super();
      console.log('child class constructor is call');
      console.log("variable 1 : ",this.number_1);
      console.log("variable 2 : ",this.number_2 );
       super.set_value(2435,2023);
     var sub = this.substract_2_value();
      console.log(sub+' is a result for substract 2 value method');
      console.log('child class result'+ this. _number_3);
      console.log('child class output is '+this.number_4);

  }
   substract_2_value(){
    var res = this.number_1-this.number_2;
    return res;
  }
 
 }
var objsub = new substract();
console.log("Substarct : ",objsub);



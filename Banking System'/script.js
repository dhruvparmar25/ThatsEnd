
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//             console.log(`hello my name is, ${this.name}`)
//     }
//     isAdult(){
//         return this.age>=18;
//     }
// }
// let person1=new Person("dhruv",21);
// person1.greet();
// console.log("Constructor : ",person1.isAdult());

// class Animal{
//   constructor(name){
//     this.name=name;
//   }
// }
// class Cat extends Animal{
//     constructor(name,color){
//         super(name);
//         this.color=color;
//     }
//     describe(){
//         console.log(`${this.name} is a ${this.color} cat.`  )
//     }
// }
// let cat1=new Cat("Kitty","White");
// cat1.describe();

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposite(amount) {
        this.balance += amount;
        return `₹${amount} Deposit Succsessful. <br> Available Balance :  ₹${this.balance}`
        // console.log(`Deposit Succsessful. Balance : ₹${this.balance}`)
    };
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return `${amount} withdrawl Successful.<br> Available Balance:  ₹${this.balance}`
            // console.log(`withdrawl Successful.Balance: ₹${this.balance}`);
        } else {
            return "Insufficient  Funds"
            // console.log("Insufficient  Funds")
        }
    }
}



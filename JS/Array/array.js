
// let person =["Dhruv",20000,true]
// let [empName,empSalary,empStatus]=person;

// console.log(empName);
// console.log(empSalary);
// if (empStatus==true) {
//     console.log("employee work prmmident");
// }else{
//     console.log("not working");
// }

let person={
    name:"dhruv",
    age:23
}
for(let key in person){
    console.log(key + ":"+person[key]);
}

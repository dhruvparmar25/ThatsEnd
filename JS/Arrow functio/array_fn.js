const findBifFun=(num1,num2)=>{
    if(num1>num2){
        return(num1);
        
    }else{
        return(num2);
        
    }
}
let bigfun=findBifFun(1000,232);
console.log("Bigger Number is:", bigfun);

const evenorodd=(number)=>{
 return number %2===0
}
let ans=evenorodd(1232)
console.log("is number id even ",ans);


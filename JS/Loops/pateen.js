console.log("RightAngled")
let  RightAngled = 5;
for (let a = 1; a <= RightAngled; a++) {
    let str = "* ";
    console.log(str.repeat(a));
}   
console.log("Upper right triangle")
let leftAngle=5;
for(b=1;b<=leftAngle; b++){

    let str = "* ";

   let space  = '  ';
    console.log(space.repeat((leftAngle-b))+str.repeat(b));
}
console.log("Lower Right Triangle")
let lr=5;
for(c=lr;c>=1       ; c--){

    let str = "* ";

   let space  = '  ';
    console.log(space.repeat((lr-c))+str.repeat(c));
}
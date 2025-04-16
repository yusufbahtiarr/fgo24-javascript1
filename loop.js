// For Loop
for(let i=1; i <= 5; i++){
    if (i==4){
        console.log("fazztrack");   
    } else {
        console.log(i);   
    }
}

// While Loop
let x = 0
while(x < 5){
    let y = 5
    let result = ""
    while(y > x){
        result += "* "
        y--
    }
    console.log(result);
    x++
}

let x = 0
while(x < 5){
    let y = 0
    let result = ""
    while(y < x+1){
        result += "* "
        y++
    }
    console.log(result);
    x++
}

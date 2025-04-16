// For Loop
// Fazztrack
for(let i=1; i <= 5; i++){
    if (i==4){
        console.log("fazztrack");   
    } else {
        console.log(i);   
    }
}

// While Loop
// Fazztrack
let x = 1
while(x <= 5){
    if (x == 4){
        console.log("fazztrack");   
    } else {
        console.log(x);   
    } 
    x++
}

// Segitiga Siku Terbalik
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

//Segitiga Siku
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

// Do While Loop
let e = 1
do{    
    if(e==4){
        console.log("Fazztrack");
    }else{
        console.log(e);
    }
    e++
}while(e <= 5)

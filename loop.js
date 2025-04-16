// For Loop
// Fazztrack
for(let i=1; i <= 5; i++){
    if (i==4){
        console.log("fazztrack");   
    } else {
        console.log(i);   
    }
}

// Segitiga Siku Terbalik
for(let x=0; x < 5; x++){
    let result = "" 
    for(let y=0; y < 5 - x; y++){
        result += "* "
    }
    console.log(result);
}

// Segitiga Siku 
result = "" 
for(let x=0; x < 5; x++){
        result += "* "
        console.log(result);     
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
// Fazztrack
let e = 1
do{    
    if(e==4){
        console.log("Fazztrack");
    }else{
        console.log(e);
    }
    e++
}while(e <= 5)

// Segitiga Siku Terbalik
let x = 0
do{
    let y = 5
    let result = ""
    do{
        result += "* "
        y--
    }while(y > x)
    console.log(result);
    x++
}while(x < 5)

// Segitiga Siku
let x = 0
do{
    let y = 0
    let result = ""
    do{
        result += "* "
        y++
    }while(y < x+1)
    console.log(result);
    x++
}while(x < 5)

// Pola Kotak
let result = ''
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        if (i == 0 || i == 4) result += "* "
        else {
            if(j == 0 || j == 4){
                result += "* "
            } else {
                result += "  "
            }
        }
    }
    result+= "\n"
}
console.log(result);

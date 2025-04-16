// Pattern 1 - Tree
for (let i = 1; i <= 5 ; i++) {
    let result = ""
    for (let j = 5; j > 0 ; j--) {
        if (j > i) {
            result += " "
        } else if (j <= i) {
            result += "* "
        }
    }
    console.log(result)
}

console.log("\n");


// Pattern 2 - Square
for (let i = 0; i<5; i++) {
    let result = ""
    for (let j=0; j<5; j++) {
        if (i==0 || i==4 || j==0 || j==4) {
            result += "* "
        } else {
            result += "  "
        }
    }
    console.log(result)
}

console.log("\n");

// Pattern 3 - Diagonal Line 1

for (let x=4; x>=0 ;x--) {
    let temp = ""
    for (let y=0; y<5; y++) {
        if (y != x) {
            temp += "* "
        } else {
            temp += "  "
        }
    }
    console.log(temp)
}

console.log("\n");

//  Pattern 3 - Diagonal Line 2

for (let x=4; x>=0 ;x--) {
    let temp = ""
    for (let y=0; y<5; y++) {
        if (y != x) {
            temp += "  "
        } else {
            temp += "* "
        }
    }
    console.log(temp)
}
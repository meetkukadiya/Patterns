// Hourglass Pattern

let num = 4;

for (let i = 1; i <= num ; i++) {
    
    let newL = "";

    for (let k = 0; k < i ; k++) {
        newL += " ";
    }
    for (let j = 0; j < num - i + 1  ; j++) {
        newL += "* ";
    }

    console.log(newL);
}

for (let i = 2; i <= num; i++) {
    
    let newL1 = "";

    for (let j = 0; j < num - i + 1 ; j++) {
        newL1 += " ";
    }

    for (let k = 0; k < i ; k++) {
        newL1 += "* ";
    }
    console.log(newL1);
}
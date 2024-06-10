// Rhombus Pattern

let num = 5;

for (let i = 0; i < num; i++) {
    
    let newL = "";

    for (var j = 0; j < i; j++) {
        newL += " "
    }

    for (let k = 0; k < num - 1 ; k++){
        newL += "* "
    }
    console.log(newL);
}
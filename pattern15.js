// Floyd's Triangle

let num = 4;
let k = 1;

for (let i = 0; i < num; i++) {
    let newL = "";

    for (let j = 0; j < i + 1; j++) {
       newL += k + " ";
       k++;
    }
    console.log(newL);
}


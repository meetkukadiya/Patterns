// Inverted Right Half Pyramid

let num = 5;

for (let i = 1; i <= num; i++) {
    let newL = '';

    for(j = 1 ; j <= num - i + 1 ; j++){
        newL += "* "
    }
    console.log(newL);
}
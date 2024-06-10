// Inverted Full Pyramid

let num = 5;

for (let i = 0; i < num; i++) {

    let newL = '';

    for (let j = 0; j < i ; j++) {
        newL += ' ';
    }

    for (let k = 0; k < num - i ; k++) {
        newL += "* "
    }

    console.log(newL);
}
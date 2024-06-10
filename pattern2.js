// Left Half Pyramid 

let num = 5; 

for (let i = 1; i <= num ; i++) {
    let newL = '';

    for (let j = 1 ; j <= num - i; j++) {
        newL += ' ';
    }
    
    for (let k = 1; k <= i; k++){
        newL += "*"
    }
    console.log(newL);
}
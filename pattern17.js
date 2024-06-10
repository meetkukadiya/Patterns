// (Swastik Pattern)
 
const num = 6;

for (let i = 0; i < num * 2 + 1; i++) {

    let newL = "";

    if(i == 0){
      for (let j = 0; j < 1; j++) {
        newL += "*";
      }
      for (let k = 0; k < num * 2 - 1; k++) {
        newL += " "
      }
      for (let l = 0; l < num + 1; l++) {
        newL += "* ";
      }
    }

   if(i !== 0 && i < num) {
    for (let m = 0; m < 1; m++) {
        newL += "* "
    }
    if(i == num / 2 ) {
        for (let m = 0; m < num /2 + 1; m++) {
            newL += " "
        }
        for (let n = 0; n < 1  ; n++) {
            newL += "*"
        }
        for (let o = 0; o < num - 1 ; o++) {
            newL += " "
        }}

        if(i !== num / 2){
    for (let n = 0; n < num - 1 ; n++) {
        newL += "  "
    }}
    for (let o = 0; o < 1; o++) {
        newL += "*"
    }}

   if(i == num / 2 ) {
    for (let m = 0; m < num - 1; m++) {
        newL += " "
    }
    for (let n = 0; n < 1  ; n++) {
        newL += "*"
    }
    for (let o = 0; o < 1; o++) {
        newL += " "
    }}
    
    if( i == num) {
     for (let p = 0; p < num * 2 + 1  ; p++) {
         newL += "* "
     }
     }



     if(i !== 0 && i > num  && i !== num * 2) {
        if(i !== num / 2 + num){
        for (let q = 0; q < num; q++) {
            newL += "  "
        }}
        if(i == num / 2 + num){
            for (let c = 0; c < num / 2; c++) {
               newL += "  "
            }
            for (let b = 0; b < 1; b++) {
               newL += "*"
            }
            for (let d = 0; d < num - 1; d++) {
               newL += " "
            }
        }
        for (let r = 0; r < 1 ; r++) {
            newL += "* "
        }
        if(i !== num / 2 + num){
        for (let s = 0; s < num - 1; s++) {
            newL += "  "
        }}
        if(i == num / 2 + num){
            for (let s = 0; s < num / 2- 1; s++) {
                newL += "  "
            }
            for (let f = 0; f < 1; f++) {
                newL += "*"
                }
                    for (let s = 0; s < num - 1; s++) {
                        newL += " "
                    }
            
        }
        for (let t = 0; t < 1; t++) {
            newL += "*"
        }
    }

    if (i == num * 2){
        for (let u = 0; u < num + 1; u++) {
            newL += "* "
        }
        for (let v = 0; v < num - 1 ; v++) {
            newL += "  "
        }
        for (let w = 0; w < 1; w++) {
            newL += "*"
        }
    }

    console.log(newL);
}
// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j );
        
 
    }
    
}

let myArray = ['FLASH','BATMAN','SUPERMAN']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 is detected")
//         break;
//     }
//     console.log(`Value of i is : ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detected")
        continue;
    }
    console.log(`Value of i is : ${index}`);
    
}
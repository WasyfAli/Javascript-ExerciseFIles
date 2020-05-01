// let iAmGlobal = 'SOmeValue';

// if(true){
//     var iAmLocal = 'SomeMoreValue';
//     iAmGlobal='superman';
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
    
// }
// console.log(iAmGlobal);
// console.log(iAmLocal);//Value leakage because of VAR

//KIngs Problem
let king = 'John';
if(true){
    //let king = 'sam';

    if(true){
       // let king = 'Ram';
        console.log(king);
    }
}
if(true){
    console.log('I am second part: ' +king);
}

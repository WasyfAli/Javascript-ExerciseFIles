//COercion is a technique where javascript predict results

console.log('5' + '5');
console.log('5' - 5);

//never allow js to predict


const giveType = typeof {};
console.log(giveType);

const adder = true - 5;
console.log(adder);

const loginDetails = []
//logic from getting detailsfrom DB
const loginId = loginDetails[0]
if(loginId !== undefined){
    console.log('Login successful');
    
}else{
    console.log('Auth failed');
    
}
//Values that interpret as false
// false
// 0
// ''
// null
// undefined

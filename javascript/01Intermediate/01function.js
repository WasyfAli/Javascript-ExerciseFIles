let name = "Wasif";
let sayHello = function (name) {
    console.log('Greeting message for user..!');
    console.log(`HEy ${name}`);
    
};
sayHello(name);

let fullNameMaker = function(firstName, lastName) {
console.log(`Welcome to LCO: ${firstName} ${lastName}`);

}
fullNameMaker('Wasif','Ali');


let myAdder = function(v1, v2) {
    let v3 = v1+v2;
    //console.log(v3);
    return v3;
    
}

console.log(myAdder(1,2));

let myMultiplier = function(num1, num2) {
    return num1 * num2;
}
console.log(myMultiplier(5,6));

//use of default parameters
let guestuser = function(name2='unName', courseCount=0)
{
    return `Hello ${name2} your course count is ${courseCount}`;
}
console.log(guestuser('wasif'));


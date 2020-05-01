let userEmail = '123qwer';
let password = '4567765123';

let userChecker = function(myString){
    if((myString.includes(123)) && (myString.length > 6))
    {
        return true;
    }else{
        return false;     //Only one return executes in a single function
    }
}

let passChecker = function(pass){
    if((pass.includes(123)) && (pass.length > 6))
    {
        return true;
    }else{
        return false;     //Only one return executes in a single function
    }
}



console.log(userChecker(userEmail));
console.log(passChecker(password));

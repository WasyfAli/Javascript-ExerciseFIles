// && - AND - Both condition true
// || - OR  - one has to true

let isVerified = false;
let isLoggedIn = true;
let hasPaymentToken =  true;
let isGuest = true;
if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log("GReeting Message to User..!");
    console.log("Grant access to Paid Courses");
    
    
} else if(isVerified || isGuest){
console.log("Allow free Preview");

} else{
    console.log("MEssage: Please contact admin");
    
}
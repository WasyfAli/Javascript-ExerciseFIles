const myValidation = () =>{
    let myvalue = document.getElementById('myform').value;
    if(isNaN(myvalue) || myvalue<1 || myvalue > 20){
        console.log("Not a valid input");
        
    }else {
        console.log("this input is OK");
        
    }
}

//Form validation
document.querySelector(".myform").addEventListener('submit',(event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
console.log(event.target.realname.value);
event.target.username.value='';
event.target.realname.value='';


} )

//login form validations
document.querySelector(".loginform").addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(`Password is: ${event.target.passwordOne.value}`);

    if((event.target.passwordOne.value) === (event.target.passwordTwo.value))
    {
        const allowLogin = document.createElement('p');
        allowLogin.textContent ='Both Passwords Matches.! Login SuxxessFul'
        document.querySelector('.loginform').appendChild(allowLogin)
    }
    else{
        const allowLogin = document.createElement('p');
        allowLogin.textContent ='Passwords Doesnot Matches'
        document.querySelector('.loginform').appendChild(allowLogin)
    }
    
    event.target.email.value ='';
    event.target.passwordOne.value ='';
    event.target.passwordTwo.value ='';
})
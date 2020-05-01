// alert('File is attached')
// document.title ='i got chnge'

// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));

// const myElement = document.querySelectorAll("#idone");
// console.log(myElement[0]);
// const myElement = document.querySelectorAll(".classone");
// console.log(myElement[0]);

// const myPElements = document.querySelector('p');
// console.log(myPElements.textContent = 'I am being change using JS')

// const myPElements = document.querySelectorAll('p')
// myPElements.forEach(function(p){
// p.textContent = 'i am change using loop in js'
// })

// const myPElements = document.querySelectorAll('p')
// myPElements.forEach((p) => {
//  p.textContent = 'i am change using loop in js'
    
// })

// const myPElements = document.querySelectorAll('p')
// myPElements.forEach(function(p){
// p.remove();
// })

// const myNewpara = document.createElement('p');
// myNewpara.textContent ='I was added via Js'
// document.querySelector('body').appendChild(myNewpara)

document.querySelector('button').addEventListener('click', (event) =>{
    // console.log(event);
    
    // alert('Button Pressed')
    event.target.textContent = 'I was clicked'
})

//track input form
document.querySelector('#myform').addEventListener('input', (event) =>{
    console.log(event.target.value);
    
})
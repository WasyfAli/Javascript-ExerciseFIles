const sayHelloOne = function(name) {
    return `Hey There, ${name} !!, (basic Function)`
}
console.log(sayHelloOne('Wasif'));




//Basic Arrow Function
const sayHelloTwo = (name) => {
    return `Hey There, ${name} !! (ARROW function)` //`` are string litrals
}
console.log(sayHelloTwo('Wasif'));




const sayHelloThree = (name) => `Hey There, ${name} !! (Single line arrow function)` 

console.log(sayHelloThree('Wasif'));




//Wherever there will be a callback in any function we will
// be using ARROW function

const todos = [{
    title: 'Buy Bread',
    isDone: true
},{
    title: 'Go to gym',
    isDone: true
},{
    title: 'Record Youtube Videos',
    isDone: false
}];

const thingsDone = (todos.filter((todo) => todo.isDone === true))
console.log(thingsDone);



//Create object with 6 elemnt, 3 true 3 false , create a function
//notDone will fetch all the false elemnets but only element not full object




const cameras = {
    price: 600,
    weight: 2000,    //this will give undefine
    myDes: () => {
        return ``
    }
}

//Cannot use Arrow functions in METHODS and Constrctors

//For Redux
const func = () => {
    key: 'value'    //we will be getting umdefine in redux
}
//we have to wrap it in ()
const func = () => ({
    key: 'value'               
});

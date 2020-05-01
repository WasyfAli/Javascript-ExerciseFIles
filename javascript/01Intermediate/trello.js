// const days =['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
// // days.forEach(function (day, index){  
// //     console.log(`Start with ${index +1} -- ${day}`);
    
// // })

// // const tables = [1,2,3,4,5,6,7,8,9,10];
// // tables.forEach(function (numbers, index){
// //     console.log(numbers * index);
    
// // })

// for (let i = days.length-1; i >=0; i--) {
//     // const element = days[i] ;
//     // console.log(element);

//     console.log(days[i]);
//     }

const myTodos = [];
myTodos.unshift('Buy Bread')
myTodos.unshift('Record videos')
myTodos.unshift('Go to Gym')
// myTodos.forEach(function(todo, index){
// console.log(`Your task number ${index +1 } is :${todo}`);

// })
for (let index = 0; index < myTodos.length; index++) {
    const element = myTodos[index];
    console.log(`Your task number ${index +1 } is :${element}`);

    
}
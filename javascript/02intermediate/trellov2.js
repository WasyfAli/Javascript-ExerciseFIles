let myTodos = {
    day: 'Mon',
    meetings: 0,
    meetDone: 0,

}

let addMeeting = function(todo, meet = 0){
    todo.meetings = todo.meetings + meet;
}

// addMeeting(myTodos, 2);
//Whatever we are passing in the place of object is the actual object
//myTodos not a copy of that....

let meetDone = function(todo, meet=0){
    todo.meetDone = todo.meetDone - meet;
}

let resetDay = function(todo){
    todo.meetings = 0;
    todo.meetDone = 0;
}
let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings + todo.meetDone;
    return `You have ${meetLeft} meetings today`;
}

addMeeting(myTodos, 4);
addMeeting(myTodos, 5);
meetDone(myTodos, 4);
console.log(myTodos);

console.log(getSummaryOfDay(myTodos));

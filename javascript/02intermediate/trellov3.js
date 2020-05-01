let myTodos = {
    day: 'Mon',
    meetings: 0,
    meetDone: 0,

    //function inside objects
    addMeeting: function(num){
       // console.log(this);
        //this, refers to all the properties in the current object
        this.meetings = this.meetings + num;
        
    },
    totalMeetDone: function(num2){
this.meetDone = this.meetDone + num2;
    },

    summary: function(){
        return `You have ${this.meetings} meetings today.
                You have done ${this.meetDone} meetings today.`
    }
}
myTodos.addMeeting(3);
myTodos.totalMeetDone(2);
console.log(myTodos.summary());

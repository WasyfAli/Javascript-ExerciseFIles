class User {
    constructor(firstname, lastname,middlename, credits){
        //will create automatically if u havent define it
        this.firstName = firstname;
    //this is new var    //this is coming from constructor param
        this.lastName = lastname;
        this.middleName = middlename;
        this.credits = credits;

    }

    getFullName(){
        // console.log(`Fullname: ${this.firstName} ${this.lastName}`);
        let fullName = `Fullname: ${this.firstName}  ${this.lastName}`
        return fullName;
    }

    editName(newName){
        const myName = newName.split(' ')
        this.firstName =myName[0];
        this.middleName = myName[1];
        this.lastName = myName[2];
    }

    getFullNameWithMiddle(){
        // console.log(`Fullname: ${this.firstName} ${this.lastName}`);
        let fullNameWIthMiddle = `Fullname With middleName: ${this.firstName} ${this.middleName} ${this.lastName}`
        return fullNameWIthMiddle;
    }

}

class Teacher extends User {
    //Inherited class
    constructor(firstname, lastname,credits, subject,middlename){
        super(firstname, lastname,middlename, credits);  //Should be the first method in child constructor
        //Must have all the parameters that parent class ctor has
        this.subject = subject;
    }
    getFullName(){
        let fullName = `Fullname: ${this.firstName}  ${this.lastName} i teach ${this.subject}`
        return fullName;
    }
}

//new keyword is use when u create fresh object from that class.

const john = new Teacher('John','Doe',34, 'javascript');
// console.log(john);
console.log(john.getFullName());
john.editName("Wasif Ali Abbasi");
console.log(john.getFullNameWithMiddle());


// const sammy = new User();
// console.log(sammy);

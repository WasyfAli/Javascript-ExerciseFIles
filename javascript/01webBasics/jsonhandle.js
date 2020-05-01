//JSON:     Javascript Object Notation---> 

const student = {
    name: "john",
    age: 23,
    isActive: true
}
console.log(student.name);

//to convert this  object into a string so that we can save it into a 
//lcoalstorage....

const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString);
//localStorage.setItem('students', studentObjToString);

//Wapas se convert into JSON
const toJSONStudent = JSON.parse(studentObjToString);
console.log(typeof toJSONStudent);
//Access alag alag
console.log(toJSONStudent.age);


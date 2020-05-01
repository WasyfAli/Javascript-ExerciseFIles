var john  = {
    name: 'Iam John',
    age: 24,
    isActive: true
}

var marry = {
    name: 'Iam marry',
    age: 23,
    isActive: true
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false
}
//map always return itteratables
let users = new Map()
users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)
console.log(users.size);
console.log(users.get('sam'));
console.log(users.keys());
console.log(users.values());

//for of loop
for (const key of users.keys()) {
    console.log(key);
    
}

for (const value of users.values()) {
    console.log(value.name);
    
}

for (const [key, value] of users.entries()) {
    console.log(key , value.name);
    
}

//maps are much different from objects ad we count elemnts in maps
//but not in objects


//foreach loop
users.forEach((value, key) => {
    console.log(value.name, key);
    
})



var arrofArr = [['one','1'], ['two','2'],['three','3']]
var newMap = new Map(arrofArr)
console.log(newMap);

localStorage.setItem('hero','Thor');
localStorage.setItem('todo','Buy  Bread')
var myHero= localStorage.getItem('hero')
console.log(myHero);
console.log(localStorage.getItem('todo'));
localStorage.setItem('todo','REcord Videos')
console.log(localStorage.getItem('todo'));



// localStorage.removeItem('hero');
console.log(`${myHero} : hero deleted`);

// localStorage.clear();




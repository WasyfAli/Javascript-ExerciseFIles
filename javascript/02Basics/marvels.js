// //datatype = Arrays

// const superHeroes = ['Iron Man','Thor','Hulk','Captain America','Vision'];
// console.log(superHeroes); //Full array
// console.log(superHeroes[0]); //first elemnt
// console.log(superHeroes.length);//total elemnts
// console.log(superHeroes[superHeroes.length - 1]);//last elemnt
// console.log(`We have ${superHeroes.length} superheroes`);//Templating string


const numbers = ['one','two,','three','four','five'];
// numbers[1] ='SOMETHING';
// console.log(numbers);


//strt of array
// console.log(numbers.shift()); //first index will be gone
// console.log(numbers);

// numbers.unshift('Something'); //insert one value at start
// console.log(numbers);


//end of array
// console.log(numbers.pop());//delete last element
// console.log(numbers);

// numbers.push('MyValues');//insert last element
// console.log(numbers);




//middle of array
numbers.splice(2, 1, 'Something');
            //start index, numbers of values, Values
console.log(numbers);

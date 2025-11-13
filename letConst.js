// const = we can't change the value but sometimes we can

const hubby = "Antur Deb Nath";
//hubby = "Shakib" // here we can't change the value
console.log(hubby);

const numbers = [12, 45];
numbers[1] = 88; // here we can change it
numbers.push(12);
console.log(numbers);

// let = we can change it's value

let patientName = "Rahim Chacha"
patientName = "Fatema Khala"
console.log(patientName);
let sum = 0;
for(var i = 0; i < 10; i++){ // here if we use var it could be leaked outside the loop but if we use let it will not leak
    sum = sum + i;
}
console.log(i);

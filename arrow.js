
//--------old way----------

// function doubleIt(num){
//     return num*2;
// }
//const result = doubleIt(5)
//console.log(result);

//  const doubleIt = function(num){
//     return num * 2;
//  }
//const result = doubleIt(5)
//console.log(result);

// --------ES6----------

const doubleIt = num => num*2
const add = (x, y) => x+y
const give5 = () => 5

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff
    return result;
}

const result = doubleIt(5)// single parameter
const result2 = add(10,20)// more than one parameter
const result3 = give5()// without parameter
const result4 = doMath(7, 5)


console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
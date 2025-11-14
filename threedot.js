
//-----old way-------
// const ages = [12, 14, 16, 13, 17]
// const ages2 = [15, 16, 12]
// const allAges = ages.concat(ages2)// concat means "join or combine things together"
// console.log(allAges);

//----ES6-----------

const ages = [12, 14, 16, 13, 17]
const ages2 = [15, 16, 12]
const allAges = [...ages, ...ages2]// concat means "join or combine things together"
console.log(allAges);

const number = [650, 450, 250]
const maximum = Math.max(...number)
console.log(maximum);

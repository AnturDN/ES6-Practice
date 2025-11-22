
const person = {name : "Jony", age: 25, job : "Facebook", gfName : "Emma Stone", address : "New York", phone : "01701355974", friends : ["Spider Man", "Super Man", "Bat Man"]}

// const gfName = person.gfName;
// const phone = person.phone;

const { phone, gfName } = person 

console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);

const friends = ["Sakib Khan", "Salman Khan", "Shahrukh Khan", "Amir Khan"]
const [prothomFriend, ...restOfTheFriend] = friends
console.log(friends);
console.log(restOfTheFriend);// it will print every friends name except the first friend's name


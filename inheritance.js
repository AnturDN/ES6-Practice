
class Parent {
    constructor(){
        this.fatherName = "Abdul Mia"
    }
}

class Child extends Parent{
    constructor(name){
        super()
        this.name = name
    }

    getFullName(){
        return this.name +" "+ this.fatherName
    }
}

const baby = new Child("Rohim")
const baby2 = new Child("Korim")
console.log(baby.getFullName());
console.log(baby2);

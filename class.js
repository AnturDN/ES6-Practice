class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName
        this.school = "Brahmanbaria School"
    }

}

const student1 = new Student(1, "Antur");
const student2 = new Student(2, "Joy");
console.log(student1, student2);
console.log(student1.name, student2.name);

// MERGE OF INTERFACE

interface Person{
    name:string;
    full_name:string;
}

interface Person{
    age:number
}



let person:Person = {

    name:"ayan",
    full_name:"Ahmed",
    age:12
   
}

console.log(person);

// Extend of inter face

interface student {
    name:string,
    rollno:number,
}

interface teacher extends student {
    teacherof:string
}


let stu:student&teacher={
    name:"Ayan",
    rollno:10203,
    teacherof:"sciece"
}

let stu1:student={
    name:"Ayan",
    rollno:10203,
}

let stu3:teacher={
    name:"Ayan",
    rollno:10203,
    teacherof:"sciece"
}
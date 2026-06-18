// problem-1

const filterEvenNumbers= (array : number[]): number[] =>{
    return array.filter(element => 
        element % 2 === 0
    );
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])) 


// problem-2

const reverseString= (str : string): string =>{
        const changeToCharacter = str.split("").reverse().join("")
        return changeToCharacter;
        
    };

console.log(`"${reverseString("typescript")}"`);


// problem -3

type StringOrNumber = string | Number

const checkType = (val : StringOrNumber ) =>{
    if(typeof val === "number"){
        return (`"Number"`)
    }
    return  (`"String"`)
}


console.log(checkType("Hello")); 
console.log(checkType(42)); 


// problem -4

function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));  



// problem-5 

interface Book {
    title : string;
    author: string;
    publishedYear: number ;
}

function toggleReadStatus (book : Book){
    return{
        ...book,
        isRead:true 
    }
};

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));



// problem -6 
class Person{
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

}


class Student extends Person{
    grade: string;

    constructor(name: string, age:number, grade: string){
        super(name,age)
        this.grade = grade;
    }

    getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }

}



const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

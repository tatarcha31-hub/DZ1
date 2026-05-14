console.log(" ");
console.log("Задача номер 1");
console.log(" ");

const student = { name: "Ivan", age: 21, skills: ["js", "css"] };
const {name, age, skills:[first, second]} = student;
console.log( "Name:", name);
console.log( "Age:", age);
console.log(first, second);
function printStudent(student){
    const {name, age} = student;

};
console.log("Student:", name,",", "Age:", age,);

console.log(" ");
console.log("Задача номер 2");
console.log(" ");

function sumAndMultiply (first, ...reset){
    const sum = reset.reduce((acc, num) => {
       return acc + num; 
    }, 0);
    return sum;
    return sum * first;
};
const result =  sumAndMultiply(1, 2, 3, 4, 5, 65);
console.log( "Итого:", result);

console.log(" ");
console.log("Задача номер 3");
console.log(" ");

const arrayFirst = [4, 5, 6]
const arraySecond = [1, 2]
const arrayThird = [9, 10]
const arrayFourth = [3]
const arrayFiveth = [7, 8]

const spreadArray = [...arraySecond, ...arrayFourth, ...arrayFirst, ...arrayFiveth, ...arrayThird];
console.log(spreadArray);

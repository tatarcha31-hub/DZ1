<<<<<<< HEAD
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
=======


const bgColor = prompt("Введите цвет фона (red, blue, green...):");
if (bgColor) {
    const lowerBgColor = bgColor.toLowerCase().trim();
    const title = document.querySelector('h1');

    if (lowerBgColor === 'red' || lowerBgColor === 'blue' || lowerBgColor === 'green' || lowerBgColor === 'yellow') {
        document.body.style.backgroundColor = lowerBgColor;
        if (title) {
            title.innerText = `Фон изменён на ${lowerBgColor}`;
        }
    } else {
        alert("Ошибка!");
    }
}
const signal = prompt(" Введите цвет светофора (red, yellow, green):");
if (signal) {
    const lowerSignal = signal.toLowerCase().trim();
    const message = document.getElementById('message');
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');
    if (lowerSignal === "red") {
        redLight.style.backgroundColor = "red";
        message.innerText = "STOP";
    } else if (lowerSignal === "yellow") {
        yellowLight.style.backgroundColor = "yellow";
        message.innerText = "WAIT";
    } else if (lowerSignal === "green") {
        greenLight.style.backgroundColor = "green";
        message.innerText = "GO";
    } else {
        if (message) message.innerText = "Некорректный ввод для светофора";
    }
}
>>>>>>> 4f0d5ff5f70f483f0757261ba66e8b1d2bbfab82



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

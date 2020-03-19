const game = document.querySelector('#game'),
      oper = document.querySelector('.operation'),
      submitBtn = document.querySelector('#submit-btn'),
      answerInput = document.querySelector('#answer-input'),
      message = document.querySelector('.message');


function randomNum1(min = 10, max = 100) {
    return Math.floor(Math.random()*(max - min + 1) + min);
};

function randomNum2(min = 2, max = 30) {
    return Math.floor(Math.random()*(max - min + 1) + min);
};

let signs = ['+', '-', '/', '*'];
let sign = signs[Math.floor(Math.random() * signs.length)];

let a = randomNum2();
let b = randomNum2();
let c = randomNum1();
let d = randomNum1();

let result;
let correct;

    if(sign === '*') {
        result =  a + sign + b;
        correct = a * b;
    } else if(sign === '+') {
        result = c + sign + d;
        correct = c + d;
    } else if(sign === '-') {
        result = c + sign + d;
        correct = c - d;
    } else {
        result = c + sign + d;
        correct = Math.round(c / d);
    };

oper.textContent = result;

submitBtn.addEventListener('click', function() {
    let answer = parseInt(answerInput.value);

    if(answer === correct) {
        gameOver(true, 'Все верно');
    } else {
        answerInput.style.borderColor = 'red';

        answerInput.value = '';

        setMessage('Подумай еще');
    };
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    answerInput.disabled = true;
    answerInput.style.borderColor = color;
    message.style.color = color;

    setMessage(msg);

    function reload() {
        return window.location.reload();
    };

    setTimeout(reload, 1000);
};

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
};

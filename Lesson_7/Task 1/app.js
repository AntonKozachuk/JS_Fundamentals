let squares = document.querySelectorAll('.square');
let result = document.getElementById('result');
let sq_array = Array.prototype.slice.call(squares);

let timer = setInterval(colorSquares, 1000);
let counter = 0;

function colorSquares() {
  let sq = sq_array[randomP()];
  
    if(counter < 100) {
        if(sq.hasAttribute('filled') === false) {
            sq.style.backgroundColor = `rgba(${getRandom()},${getRandom()},${getRandom()},.6)`;
            sq.setAttribute('filled', true); 
            counter++;
        } else {
            colorSquares();
        };
    } else {
       clearInterval(timer);
       result.textContent = 'Заполнение завершено';
    };
};

function randomP(min = 0, max = 99){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandom(min = 0, max = 255){
     return Math.floor(Math.random() * (max - min) + min + 1);
};
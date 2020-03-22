document.querySelector('.container').innerHTML = '<div class="square"></div>'.repeat(100);

let squares = document.querySelectorAll('.square'),
    result = document.getElementById('result'),
    clicks = document.getElementById('clicks'),
    timer = setInterval(colorSquares, 500),
    counter = 0,
    counter2 = 0;

document.querySelector('.container').addEventListener('click', function(e) {
    let target = e.target;
    
    if(result.textContent === '') {
        if (target.hasAttribute('filled') === true) {
            (e.target).removeAttribute('filled');
            (e.target).style.backgroundColor = '';
            counter--;
            counter2++;
            clicks.textContent = `Кликов: ${counter2}`;
        };
    };
});

function colorSquares() {
  let sq = squares[getRandom(0, 99)];
    
    if(counter < 100) {
        if(sq.hasAttribute('filled') === false) {
            sq.style.backgroundColor = `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)},.6)`;
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

function getRandom(min, max){
     return Math.floor(Math.random() * (max - min + 1) + min);
};
// let cont = document.querySelector('.container');
// let squares = document.querySelectorAll('.square');

// let timer = setInterval(colorSquares, 200);
// // let counter = 0;

// function colorSquares() {
    
//     for (let i=0; i < squares.length; i++) {
//         let d = squares[i];
//         let color = getComputedStyle(d).backgroundColor;
//         d.style.width = '60px';
//         d.style.height = '60px';
//         d.style.position = "absolute";
//         console.log(color);
//         console.log(d);
        


//         if(color === 'rgba(0, 0, 0, 0)') {
//             d.style.backgroundColor = `rgba(${getRandom()},${getRandom()},${getRandom()},.3)`;
//             d.style.left = `${randomP() * 60}px`;
//             d.style.top =  `${randomP() * 60}px`;
//             return d;
//         } else {
//             clearInterval(timer);
//         };
//     };
    
// }

// function randomP(min = 0, max = 9){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function getRandom(min = 0, max = 255){
//     return Math.floor(Math.random() * (max - min) + min + 1);
// }

// if(counter <= 100)
// let color = getComputedStyle(d).backgroundColor;
// counter++;
//     console.log(counter);
//     const d = document.createElement('DIV');
//     cont.appendChild(d)

//     if(counter <= 100) {


//         d.style.backgroundColor = `rgba(${getRandom()},${getRandom()},${getRandom()},.3)`;
//         d.style.width = '60px';
//         d.style.height = '60px';
//         d.style.position = "absolute";
//         d.style.left = `${randomP() * 60}px`;
//         d.style.top =  `${randomP() * 60}px`;
//         return d;
//     } else {
//         clearInterval(timer);
//     };


let cont = document.querySelector('.container');

let timer = setInterval(colorSquares, 200);
let counter = 0;

function colorSquares() {
    counter++;
    console.log(counter);
    const d = document.createElement('DIV');
    cont.appendChild(d)

    if(counter <= 100) {
        d.style.backgroundColor = `rgba(${getRandom()},${getRandom()},${getRandom()},.3)`;
        d.style.width = '60px';
        d.style.height = '60px';
        d.style.position = "absolute";
        d.style.left = `${randomP() * 60}px`;
        d.style.top =  `${randomP() * 60}px`;
        return d;
    } else {
        clearInterval(timer);
    };
}

function randomP(min = 0, max = 9){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandom(min = 0, max = 255){
    return Math.floor(Math.random() * (max - min) + min + 1);
}




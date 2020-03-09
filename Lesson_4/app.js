// Task 1: Find a Chair

// function meeting(x, need) {
    
//     if(need > 0 && need <= 8) {
//         alert('Not enough!');

//         let result = [];
       
//         for(let i = 0; i < x.length; i++){
//             let freeChairs = 0;
            
//             if(x[i][1] > x[i][0].length) {
//                 freeChairs = x[i][1] - x[i][0].length;
//             };

//             if(need - freeChairs < 0) {
//                 freeChairs = need;
//             };

//             need -= freeChairs;
//             result.push(freeChairs);

//             if(need === 0) {
//                 return result;
//             }};
            
//     } else {
//         alert('Game On!');
//     };
// };

// console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]], 3));



// Task 2: Tic-Tac-Toe Checker

let ttt = [
    [0, 0, 2],
    [0, 0, 2],
    [1, 1, 0]
];

function checking(ttt) {
  
    //checking for the win
    function wins(ttt) {

        for(let i = 0; i < ttt.length; i++){
            if(ttt[i][0] == ttt[i][1] && ttt[i][0] == ttt[i][2]) {
            return ttt[i][0];
        }};

        for(let i = 0; i < ttt.length; i++){
            if(ttt[0][i] == ttt[1][i] && ttt[0][i] == ttt[2][i]) {
                return ttt[0][i];
        }};

        if(ttt[1][1] == ttt[0][0] && ttt[1][1] == ttt[2][2] || ttt[1][1] == ttt[0][2] && ttt[1][1] == ttt[2][0]) {
            return ttt[1][1];
        };
    };

    let win = wins(ttt);

    //checking for the draw
    function checkDraw(ttt) {
       if(ttt.toString().indexOf(0) == -1 && win == undefined) {
            return 0;
        };
    };

    let draw = checkDraw(ttt);

    if(win !== undefined && win !== 0) {
        return win;
    } else if (draw !== undefined) {
        return 0;
    } else {
        return -1;
    };
    
};

console.log(checking(ttt));



// Task 3: Напишите свои функции-аналоги методов массивов используя только свойства массивов:

// let arr = ['Яблоко', 'Банан', 'Ананас'];
// let arr2 = ['Груша', 'Персик', 'Вишня'];

//_______________________________________________________________
// pop 
// function pop(arr) {
//     arr.length = arr.length - 1;
//     return arr;    
// };
// console.log(pop(arr));
    
//_______________________________________________________________
// push 
// function push(arr, el) {
//     arr[arr.length] = el;
//     return arr;    
// };
// console.log(push(arr, 'Груша'));

//_______________________________________________________________
// shift
// function shift(arr) {
//     let x = [];
//     for (let i = 0; i <  arr.length - 1; i++) {
//         x[i] = arr[i + 1]; 
//     };
//     return x;    
// };

// console.log(shift(arr));

//_______________________________________________________________
// unshift 
// function unshift(arr, el) {
//     let x = [];
//     for (let i = 0; i < arr.length; i++) {
//         x[i + 1] = arr[i];
//     };
//     x[0] = el;  
//     return x;    
// };
    
// console.log(unshift(arr, 'Груша'));

//_______________________________________________________________
// concat
// function concat(arr, arr2) {
//     let x = [];
//     for (let i = 0; i < arr.length; i++) {
//         x[i] = arr[i];
//     }; 
//     for (let i = 0; i < arr2.length; i++) {
//         x[x.length] = arr2[i];
//     }; 

//     return x;    
// };
    
// console.log(concat(arr, arr2));



// Task 4: reduce

// let arr = ['Яблоко', 'Банан', 'Ананас'];

// console.log(arr.map(el => el[0]));

// console.log(arr.reduce(( (pr, el) => {
//     pr.push(el[0]); 
//     return pr;
// } ), []));

//_______________________________________________________________

// console.log( arr.filter(el => el[0].toLowerCase() == 'а') );

// console.log(arr.reduce(( (pr, el) => {
//         if (el[0].toLowerCase() == 'а') {
//             pr.push(el);
//         }
//         return pr;
//     } ), []));

//_______________________________________________________________

// arr.forEach((el, i, arr) => arr[i] = `${i + 1}: ${el}`);
// console.log(arr);

// arr.reduce(( (pr, el, i) => {
//     arr[i] = `${i + 1}: ${el}`
//     pr.push(el);
        
//     return pr;
// } ), []);
// console.log(arr);


// Task 5: squares 

// let colors = [
//     "rgb(192, 192, 192)",
//     "rgb(128, 128, 128)",
//     "rgb(0, 0, 0)",
//     "rgb(255, 0, 0)",
//     "rgb(128, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(128, 128, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 128, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 128, 128)",
//     "rgb(0, 0, 255)",
//     "rgb(0, 0, 128)",
//     "rgb(255, 0, 255)",
//     "rgb(128, 0, 128)",
//     "rgb(128,0,0)",
//     "rgb(220,20,60)",
//     "rgb(250,128,114)",
//     "rgb(255,140,0)",
//     "rgb(255,215,0)",
//     "rgb(240,230,140)",
//     "rgb(154,205,50)",
//     "rgb(173,255,47)",
//     "rgb(32,178,170)",
//     "rgb(0,139,139)",
//     "rgb(95,158,160)",
//     "rgb(0,0,128)",
//     "rgb(139,0,139)"
// ];

// let squares = document.querySelectorAll('.squares');

// for (let i=0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
// };

// let change = document.getElementById('change');

// change.onclick = function(e) {
//     let target = e.target;

//     let computedStyle = getComputedStyle(target);
      
//     while (target != this) {
//         if (target.tagName == 'DIV') {

//         document.body.style.backgroundColor = computedStyle.backgroundColor;

//         return;
//         };
        
//         target = target.parentNode;
//       };
//     };



// Task 2: Tic-Tac-Toe Checker


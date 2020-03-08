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




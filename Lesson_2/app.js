// 1

// let L = prompt('Please enter the length');
// let W = prompt('Please enter the width');
// let H = prompt('Please enter the height');
// const tin = 16;

// let walls = (Number(L) + Number(W)) * 2 * H;
// console.log(walls);
// let tinNum = Math.ceil(walls / tin);

// let message = (L <= 1000 && W <= 1000 && H <= 1000) ? `${tinNum}` : 
//                 'Please enter parameters lower then 100';

// alert(message);


// 2
let A1 = prompt('Please enter the price for a kg of the first type of sand');
let A2 = prompt('Please enter the price for a kg of the second type of sand');
let A3 = prompt('Please enter the price for a kg of the third type of sand');

let B1 = prompt('Please enter the volume of the first tank in kg');
let B2 = prompt('Please enter the volume of the first tank in kg');
let B3 = prompt('Please enter the volume of the first tank in kg');

let arr1 = new Array(A1, A2, A3).sort();
let arr2 = new Array(B1, B2, B3).sort();

let sum = arr1[0] * arr2[0] + arr1[1] * arr2[1] + arr1[2] * arr2[2];

let message = (A1 < 100 && A2 < 100 && A3 < 100 && B1 < 100 && B2 < 100 && B3 < 100) ? alert(sum) : alert('Please enter the number lower then 100');


// 3
// let numb = prompt('Please enter the number of your ticket');
// let x = numb.split('').map(x=>+x);

// let left = x[0] + x[1] + x[2];
// let right = x[3] + x[4] + x[5];

// let message = (left === right && numb >= 0 && numb < (10 ** 6)) ? 'YES' : 'NO';

// alert(message);


// 4.1

// let age = prompt('Please enter your age');

// let message = (age >=0 && age <= 2) ? 'You are a child!' :
//     (age >= 12 && age < 18) ? 'You are a teenager!' :
//     (age >= 18 && age < 60) ? 'You are an adult!' :
//     (age >= 60) ? 'You are a senior citizen!' :
//     'Please enter your actual age!';

// alert(message);

// 4.2

// let numb = prompt('Please enter a number between 1 and 9');

// let message = (numb == 1) ? '!' :
//     (numb == 2) ? '@' :
//     (numb == 3) ? '#' :
//     (numb == 4) ? '$' :
//     (numb == 5) ? '%' :
//     (numb == 6) ? '^' :
//     (numb == 7) ? '&' :
//     (numb == 8) ? '*' :
//     (numb == 9) ? '(' :
//     'Please enter the correct number!';

// alert(message);

// 4.3

// let numb = prompt('Please enter a 3 digits number');

// let firstDig = numb  % 10;
// numb =  (numb - firstDig) / 10;
// let secDig = numb % 10;
// let thirdDig = (numb - secDig) / 10;

// let message = (firstDig == secDig || firstDig == thirdDig || secDig == thirdDig) ? 'There are similar digits' :
//     'There are no similar digits';

// alert(message);

// 4.4

// let year = prompt('What year is it?');

// if((year % 400) === 0) {
//     alert('This is a leap year');
// } else if((year % 4) === 0 && (year % 100) !== 0 ) {
//     alert('This is a leap year');
// } else {
//     alert('This isn\'t a leap year');
// };


//  4.5

// let numb = prompt('Please enter a 5 digits number');

// const palindrome = numb.split('').reverse().join('');

// let message = (palindrome === numb) ? 'It is palindrome!' : 'It isn\'t palindrome!';

// alert(message);

// 4.6

// let USD = prompt('Please enter the number of USD');
// let cur = prompt('Please enter the currency you want to receive: EUR, UAN or AZN');
// const EUR = .91;
// const UAN = 24.6;
// const AZN = 1.7;

// switch(cur) {
//     case 'EUR':
//         alert(`Result: ${USD * EUR}`);
//         break;
    
//     case 'UAN' :
//         alert(`Result: ${USD * UAN}`);
//         break;

//     case 'AZN':
//         alert(`Result: ${USD * AZN}`);
//         break;

//     default:
//         alert('Please enter the valid currency');
// };

// 4.7

// let purch = prompt('Please enter the purchase amount');

// let message = (purch >= 200 && purch < 300) ? 'Your discount is 3%' :
//     (purch >= 300 && purch < 500) ? 'Your discount is 5%' :
//     (purch >= 500) ? 'Your discount is 7%':    
//     'Please enter the actual purchase amount!';

// alert(message);

// 4.8

// let per = prompt('Please enter the perimeter of the square');
// let cirLen = prompt('Please enter the circumference');

// let side = per / 4;
// let r = cirLen / (2 * Math.PI);

// let message = (side >= r) ? 'Fits' : 'Don\'t fit';

// alert(message);

// 4.9

// let q1 = prompt(`Please answer the question 1:
//     1) Right
//     2) Wrong
//     3) Wrong again`);

// let q2 = prompt(`Please answer the question 2:
//     1) Wrong
//     2) Right
//     3) Wrong again`);

// let q3 = prompt(`Please answer the question 3:
//     1) Wrong
//     2) Wrong again
//     3) Right`);    

// let count = 0;

// if(q1 === 'Right') {
//     count += 2;
// };

// if(q2 === 'Right') {
//     count += 2;
// };

// if(q3 === 'Right') {
//     count += 2;
// };

// alert(`Your result is: ${count}`);

// 4.10
// let day = prompt('Please enter the day');
// let month = prompt('Please enter the month');
// let year = prompt('Please enter the year');

// let date = new Date(year, Number(month) - 1, day);

// let nextDay = new Date(date);
// nextDay.setDate(date.getDate()+1);

// alert(`The next day is: ${nextDay}`);
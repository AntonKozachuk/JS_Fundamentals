// Task 1

// sumMin = (arr) => {
//     let answer = 0;

//     for(let i = 0; i < arr.length; i++){
//         answer += arr[i].sort((a, b) => a - b)[0]
//     } 
    
//     console.log(arr);
//     return answer;
// };

// console.log(sumMin([[1,2,3],[33,22,55],[16,42,345,79,1]]));



// Task 2:Two Oldest Ages

// function twoOldestAges(ages) {
//     return ages.sort((a, b) => a - b).slice(-2);
// };

// console.log(twoOldestAges([1, 2, 10, 8]));



// Task 3: Shortest Word

// function shortestWord(str) {
//     let arr = str.split(' ').sort((a, b) => a.length - b.length);

//     let result = arr[0].toString().length;

//     return result;
// };

// console.log(shortestWord('i want to travel the world writing code one day'));



// Task 4: Your order, please

// function yourOrder(str) {
//     if(str === ""){
//       return "";
//     }

//     let result = [];
//     str = str.split(" ");

//     for(let i = 0; i < str.length; i++){
//         for(let j = 0; j < str.length; j++){  
//             if(str[j].indexOf(i) > -1){
//                 result.push(str[j]);
//             }};
//     };

//     return result.join(" ");
  
//   };

//   console.log(yourOrder('4of Fo1r pe6ople g3ood th5e the2'));

// Task 5

// function change() {
//     dot1.style.backgroundColor = bgc.value;
//     dot1.style.height = `${wh.value}px`;
//     dot1.style.width = `${wh.value}px`;
// };

// btn1.onclick = change;



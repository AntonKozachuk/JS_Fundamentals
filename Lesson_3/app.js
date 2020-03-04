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

// Task 5

// function change() {
//     dot1.style.backgroundColor = bgc.value;
//     dot1.style.height = `${wh.value}px`;
//     dot1.style.width = `${wh.value}px`;
// };

// btn1.onclick = change;



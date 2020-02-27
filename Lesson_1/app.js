//1
//    let name = prompt('Please enter your name');
//    alert('Hello, ' + name + '!'); 

//2 
// let yOb = prompt('Please enter your year of birth');
// const currYear = 2020;
// alert('Your age is ' + (curYear - yOb));

//3
// let sideLenght = prompt('Please enter the legnth of one side of the square');
// alert('Square perimeter is ' + (sideLenght * 4));

//4
// let radius = prompt('Please enter circle radius');
// alert('Circle area is ' + (Math.PI * (radius**2)));

//5
// let dist = prompt('Please enter the distance');
// let time = prompt('In how many hours you want to be there?');
// alert('Your speed should be ' + (dist / time).toFixed(1) + ' km per hour');

//6
// let dol = prompt('Please enter the number of dollars');
// const dolEur = .91;
// alert('You have ' + (dol * dolEur) + ' Euros');

//7 
// let memSize = prompt('Please enter your flash drive memory size in GB');
// let memSizeMb = memSize * 1024;
// const file = 820;
// alert('You can load ' + ((memSizeMb - (memSizeMb % file)) / file) + ' files')

//7 - cheating way
// let memSize = prompt('Please enter your flash drive memory size in GB');
// alert('You can load ' + Math.floor(memSize * 1024 / 820) + ' files');

//8
// let money = prompt('How much money do you have?');
// let price = prompt('Please enter the price of one chocolate bar');
// alert('You can buy ' + ((money - (money % price)) / price) + ' chocolate bars.' + ' And you will have ' + (money % price) + ' bucks left.');

//9
// let numb = prompt('Please enter a 3 digits number');
// let firstDig = numb  % 10;
// numb =  (numb - firstDig) / 10;
// let secDig = numb % 10;
// let thirdDig = (numb - secDig) / 10;
// alert(String(firstDig) + secDig + thirdDig);


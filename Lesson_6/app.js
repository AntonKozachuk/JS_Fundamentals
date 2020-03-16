// 1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.

// let str = prompt('Please enter a string');


// function stats(str) {
//     let letter = str.match(/[\p{Alpha}\p{Join_C}]/gui) || [];
//     let numb = str.match(/\d/g) || [];
//     let symb = str.match(/[^\d\s\p{Alpha}\p{Join_C}]/gui) || [];

//     return `    Количество букв:  ${letter.length}
//     Количество цифр:  ${numb.length}
//     Количество других знаков:   ${symb.length}`;
// };

// alert(stats(str));

// 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

// let numb = prompt('Please enter a two-digit number');

// function text(numb) {
//     let mtch = numb.match(/\b[1-9]\d\b/) || [];

//     if(mtch.length > 0) {
//         let first = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадцать'];
//         let second = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//         let third = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

//         if (mtch <= 20 ) {
//             mtch = +mtch[0];
//             return first[mtch - 10];
//         };

//         if(mtch > 20 && mtch <= 99) {
//             mtch = mtch[0].toString().split('').map(Number);
//             return `${second[mtch[0] - 2]} ${third[mtch[1] - 1]}`;
//         };
//     } else {
//         return 'Please enter the correct number';
//     };
// };

// alert(text(numb));

// 3. Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.

// let str = prompt('Please enter a string');

// function change(str) {
    
//     str = str.replace(/[A-Z]/g, u => u.toLowerCase());
      
//     str = str.replace(/[a-z]/g, u => u.toUpperCase());
    
//     str = str.replace(/\d/g, '_');
         
//     return str;
//     };

//   alert(change(str));

// 4. Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, textalign в textAlign.

// let str = 'background-color';

// function transf(str) {
//     str = str.split('-')
//     str[1] = str[1].replace((/^[a-z]/), u => u.toUpperCase());
//     str = str.join(''); 
//     return str;
// };

// alert(transf(str));

// 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. Например: cascading style sheets в CSS, объектно ориентированное программирование в ООП.

let str = 'cascading style sheets';

function transf(str) {
    str = str.replace(/\b[a-z]/g, u => u.toUpperCase());
    return str;
};

alert(transf(str));
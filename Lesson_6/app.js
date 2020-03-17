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

// INCORRECT! =(

// let str = prompt('Please enter a string');

// function change(str) {
    
//     str = str.replace(/[A-Z]/g, u => u.toLowerCase()).replace(/[a-z]/g, u => u.toUpperCase()).replace(/\d/g, '_');
         
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
// let str = 'cascading style sheets';
// let str = 'объектно ориентированное программирование';

// function transf(str) {
//     str = str.replace(/(?:^|\s)(\p{Ll})/gu, u => u.toUpperCase()).match(/\p{Lu}/gu).join('');

//     return str;
// };

// alert(transf(str));



// 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.

// function concat() {
    
//     let args = Array.prototype.slice.call(arguments, 0);
    
//     return args.join('');
// };

// alert(concat('Написать функцию,', 'которая принимает любое количество строк', 'объединяет их', 'в одну длинную строку и возвращает ее.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sequi debitis tenetur magni saepe ipsam, nostrum ipsum accusantium quam autem reiciendis at doloremque. Nam temporibus autem quae labore, porro quaerat.'));



// 8. Написать функцию, которая получает url и выводит подробную информацию о нем. Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.

// let url = 'https://itstep.org/ua/about';

// function info(url) {
//     let protocol = url.match(/\w+(?=:)/);
//     // Може приймати не тільки одинарний домен .org, а і dp.ua і тп.
//     let domain = url.match(/(?<=:\/\/).*(?=(\.\w+)\/)/).join('');
//     let path = url.match(/(?<=\.\w+\/).*/);
    
//     return `    Протокол:  ${protocol}
//     Домен:  ${domain}
//     Путь:   ${path}`;
// };

// alert(info(url));



// 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”. Выполняя задание, не используйте функцию split().

// function spliT(str, separator) {
//     let reg = new RegExp(`[^\[${separator}](.+?(?=\[${separator}]))|(?<=\[${separator}]).*`, "g");
//     let arr = str.match(reg);
//     return arr;
// };

// alert(spliT('10/08/2020', '/'));

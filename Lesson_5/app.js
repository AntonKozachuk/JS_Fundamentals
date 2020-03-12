// Task 1
// 1. Написать функцию возведения числа в степень.
// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1));
// };
// console.log(pow(2, 3));

// 2. Написать функцию поиска наибольшего общего делителя.
// function pow(a, b) {
//         return (b == 0) ? a : pow(b, a % b);
// };
// console.log(pow(1071, 462));



// Task 2: Сделайте 10 спиннеров из предложенных spinners gif

// function loader(l) {
//     console.clear();
//     console.log(l.spinners[l.counter]);
//     l.counter++;
//     if (l.counter == l.spinners.length) {
//         l.counter = 0;
//     }
// };

// 1: line
// setInterval(loader, 1000, { spinners: ["-", "\\", "|", "/"], counter: 0 });

// 2: bouncing
// setInterval(loader, 1000, { spinners: [ "[    ]",
//                                         "[=   ]",
//                                         "[==  ]",
//                                         "[=== ]",
//                                         "[ ===]",
//                                         "[  ==]",
//                                         "[   =]",
//                                         "[    ]",
//                                         "[   =]",
//                                         "[  ==]",
//                                         "[ ===]",
//                                         "[====]",
//                                         "[=== ]",
//                                         "[==  ]",
//                                         "[=   ]"], counter: 0 });

// 3: bouncing ball
// setInterval(loader, 500, { spinners: [ "( ●    )",
//                                         "(  ●   )",
//                                         "(   ●  )",
//                                         "(    ● )",
//                                         "(     ●)",
//                                         "(    ● )",
//                                         "(   ●  )",
//                                         "(  ●   )",
//                                         "( ●    )",
//                                         "(●     )"], counter: 0 });


// 4: pipe
// setInterval(loader, 1000, { spinners: ["┤", "┘", "┴", "└", "├", "┌", "┬", "┐"], counter: 0 });

// 5: star
// setInterval(loader, 1000, { spinners: ["✶", "✸", "✹", "✺", "✹", "✸", "✶"], counter: 0 });

// 6: grow 2
// setInterval(loader, 1000, { spinners: [ "▏",
//                                         "▎",
//                                         "▍",
//                                         "▋",
//                                         "▊",
//                                         "▉",
//                                         "▊",
//                                         "▋",
//                                         "▍",
//                                         "▎"], counter: 0 });

// 7: arrow 3
// setInterval(loader, 1000, { spinners: ["▹▹▹▹▹",
//                                         "▸▹▹▹▹",
//                                         "▹▸▹▹▹",
//                                         "▹▹▸▹▹",
//                                         "▹▹▹▸▹",
//                                         "▹▹▹▹▸"], counter: 0 });

// 8: hamburger
// setInterval(loader, 1000, { spinners: ["☱", "☲", "☴"], counter: 0 });

// 9: arrow 2
// setInterval(loader, 1000, { spinners: [ "←",
//                                         "↖",
//                                         "↑",
//                                         "↗",
//                                         "→",
//                                         "↘",
//                                         "↓",
//                                         "↙"], counter: 0 });

// 10: arrow 2
// setInterval(loader, 1000, { spinners: [ "▁",
//                                         "▃",
//                                         "▄",
//                                         "▅",
//                                         "▆",
//                                         "▇",
//                                         "▆",
//                                         "▅",
//                                         "▄",
//                                         "▃"], counter: 0 });


// Task 3: Создать html-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

// document.getElementById('next').onclick = switchLight;

// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// };

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// };

// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// };

// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// };

// let clickTimes = 0;

// function switchLight() {
//   clickTimes++;
//   switch (clickTimes) {
//     case 1:
//       clearLights();
//       document.getElementById('stopLight').style.backgroundColor = "red";
//       break;
//     case 2:
//       clearLights();
//       document.getElementById('slowLight').style.backgroundColor = "yellow";
//       break;
//     case 3:
//       clearLights();
//       document.getElementById('goLight').style.backgroundColor = "green";
//       break;
//     case 4:
//       document.getElementById('stopLight').style.backgroundColor = "black";
//       document.getElementById('slowLight').style.backgroundColor = "black";
//       document.getElementById('goLight').style.backgroundColor = "black";
//       clickTimes = 0;
//       break;
//   };
// };
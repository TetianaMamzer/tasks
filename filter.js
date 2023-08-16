// Разделить массив на части заданной длины.
// let stringArr = ['cat', 'merry!', 'long', 'sub!'];

// let sepArr = []
// const long = 3;
// let firstStringArr = stringArr.slice(0, 3);
// let secondStringArr = stringArr.slice(long)

// sepArr.push(firstStringArr, secondStringArr)

// console.log(sepArr);

// Проверить, все ли элементы массива удовлетворяют определенному условию.

// let stringArr = ['cat', 'merry!', 'long', 'sub!'];

// const newStringArr = stringArr.every(ch => ch.length > 3 && ch.includes('!'))

// console.log(newStringArr)

// -------------------------

// let stringArr = ['cat', 'merry!', 'long', 'sub!'];

// const newStringArr = stringArr.reduce((prev, current) => prev.length > 3 && current.length > 3 && prev.includes('!') && current.includes('!'))

// console.log(newStringArr)

// Найти разницу между максимальным и минимальным элементами числового массива.

// let arrNumbers = [3, 8, 12, 1, 9, 7];

// const subtraction = (arr) => {
//   let maxNubmer = arrNumbers[0];

//   let minNumber = arrNumbers[0];

//   for (const number of arr) {
//     if (number < minNumber) {
//       minNumber = number;
//     }
//     if (number > maxNubmer) {
//       maxNubmer = number;
//     }

//   }

//   return maxNubmer - minNumber;
// };

// console.log(subtraction(arrNumbers))

// Проверить, содержит ли массив хотя бы один элемент, удовлетворяющий определенному условию.

// let stringArr = ['cat', 'merry!', 'long', 'sub!'];

// const newStringArr = stringArr.some(ch => ch.length > 3 && ch.includes('!'))

// console.log(newStringArr)

// Преобразовать массив чисел в массив строк, оставив только четные числа и добавив "Even: " перед каждым числом.

// let arrNumbers = [3, 8, 12, 1, 9, 7];

// function createStringsArr(arr) {

//   const newStringArr = [];

//   const isDuble = arr.filter(n => n % 2 === 0);

//   for (const number of isDuble) {
//     newStringArr.push(`Even: ${number}`)
//   }

//   return newStringArr;

// }

// console.log(createStringsArr(arrNumbers))

// -----------------------
// let arrNumbers = [3, 8, 12, 1, 9, 7];
// const newStringArr = [];

// const filterArr = arrNumbers.filter((n) => n % 2 === 0);

// for (const n of filterArr) {
//  newStringArr.push(`Even: ${n}`);
// }

// console.log(newStringArr)

// Объединить все строки из массива в одну строку, разделяя их запятой.

// let stringArr = ['cat', 'merry!', 'long', 'sub!'];

// const newString =  stringArr.join(', ');

// console.log(newString)
// Удалить из каждой строки массива все символы, не являющиеся буквами.

// let stringArr = ['cat 2', 'merry!', 'long-', 'sub)'];

// const createNewArr = (arr) => {
//   let newArr = [];

//   const redSimbols = '1234567890!@#$%^&*()_+-=~/., ';

//   for (const str of arr) {
//     let newWorld = '';

//     for (let i = 0; i < str.length; i++) {
//       if (!redSimbols.includes(str[i])) {
//         newWorld += str[i];
//       }
//     }
    
//     newArr.push(newWorld);
    
//   }

//   return newArr;
    
// }

// console.log(createNewArr(stringArr))

// ------------------------------

// let stringArr = ['cat 2', 'merry!', 'long-', 'sub)'];
// const redSimbols = '1234567890!@#$%^&*()_+-=~/., ';

// const createNewArr = stringArr.map(world => {
//   let newWorld = '';

//     for (let i = 0; i < world.length; i++) {
//       if (!redSimbols.includes(world[i])) {
//         newWorld += world[i];
//       }
//   }
  
//   return newWorld;
// })

// console.log(createNewArr)

// Создать новый массив, в котором строки будут отсортированы по длине (от короткой к длинной).

// let stringArr = ['Cat', 'MErry!', 'loNg', 'sub)', 'long'];

// const subtraction = stringArr.sort((prev, current) => prev.length - current.length)

// console.log(subtraction)

// Преобразовать все строки в массиве в нижний регистр и удалить повторяющиеся строки.

// let stringArr = ['Cat', 'MErry!', 'loNg', 'sub)', 'long'];

// const newArrUp = stringArr.map(str => str.toLowerCase());

// const newSet = new Set(newArrUp);

// console.log(newSet)

// -------------------
// let stringArr = ['Cat', 'MErry!', 'loNg', 'sub)', 'long'];

// const newArrUp = stringArr.map(str => str.toLowerCase());

// const unique = newArrUp.filter((world, index, arr) =>  arr.indexOf(world) === index);

// console.log(unique)

// Заменить все гласные буквы в каждой строке массива на символ "*".

// let stringArr = ['cat', 'merry!', 'long', 'sub)'];
// const redSimbols = 'euioay';

// const createNewArr = stringArr.map(world => {
//   let newWorld = '';

//     for (let i = 0; i < world.length; i++) {
//       if (!redSimbols.includes(world[i])) {
//         newWorld += world[i];
//       }
//   }
  
//   return newWorld;
// })

// console.log(createNewArr)

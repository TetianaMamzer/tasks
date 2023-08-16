// // Используя .map(), увеличьте каждый элемент массива на 2.

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((n) => n * 2);

// console.log(newArr);
// // ------------
// const arrNext = [1, 2, 3, 4, 5];

// const newMapArr = (numb) => {
//   let mapArr = [];

//   for (const n of numb) {
//     mapArr.push(n * 2);
//   }

//   return mapArr;
// };

// console.log(newMapArr(arrNext));
// // С помощью .filter(), выберите только положительные элементы массива.

// const arr1 = [1, 2, 3, 4, 5, -10, -3, -4];

// const newArr1 = arr1.filter((n) => n > 0);

// console.log(newArr1);
// //-------------------
// const arrNext1 = [1, 2, 3, 4, 5, -10, -3, -4];

// const newFilterArr1 = (arr) => {
//   let filterArr = [];

//   for (const n of arr) {
//     if (n > 0) {
//       filterArr.push(n);
//     }
//   }

//   return filterArr;
// };

// console.log(newFilterArr1(arrNext1));

// // Используя .reduce(), найдите сумму всех элементов массива.

// const arr2 = [1, 2, 3, 4, 5, -10, -3, -4];

// const newArr2 = arr2.reduce((prev, aft) => prev + aft, 0);

// console.log(newArr2);

// //-------------------
// const arrNext2 = [1, 2, 3, 4, 5, -10, -3, -4];

// const newFilterArr2 = (arr) => {
//   let filterArr = 0;

//   for (const n of arr) {
//     filterArr += n;
//   }

//   return filterArr;
// };

// console.log(newFilterArr2(arrNext2));

// // Напишите лямбда-функцию, которая определяет, является ли строка палиндромом.
// // Сделайте лямбда-функцию, которая переворачивает строку.

// const revers = (text) => text.split("").reverse().join("");

// const isPalidrom = (text) => text.toUpperCase() === revers(text.toUpperCase());

// console.log(isPalidrom("Level"));
// //----------------------

// function isPolidrome(text) {
//   for (let i = 0; i < text.length; i++) {
//     if (text.toUpperCase()[i] !== text.toUpperCase()[text.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPolidrome("Level"));
// У вас есть список строк: ["apple", "banana", "cherry"]. Используя map, удалите все гласные из каждой строки.

// const arrStr = ["apple", "banana", "cherry"];

// function createNewString(arrStr) {
//   const vowels = "aeioyu";
//   let newArr3 = [];

//   arrStr.map((str) => {
//     let text = "";
//     for (const ch of str) {
//       if (!vowels.includes(ch)) {
//         text += ch;
//       }
//     }
//     newArr3.push(text);
//   });

//   return newArr3;
// }

// console.log(createNewString(arrStr));


// Дан список чисел: [4, 8, 12, 16, 20]. С помощью map, вычтите из каждого числа 2.

// const arrNumbers = [4, 8, 12, 16, 20];

// const newNumbersArr = arrNumbers.map(n => n - 2);

// console.log(newNumbersArr);

// У вас есть список строк: ["Hello", "world", "MAP", "list"]. Используя map, преобразуйте каждую строку в нижний регистр.

// const arrStrings = ["Hello", "world", "MAP", "list"];

// const newStringArr = arrStrings.map(str => str.toLowerCase());

// console.log(newStringArr);

// Дан список строк: ["apple", "banana", "cherry"]. Используя map, преобразуйте все строки в верхний регистр.

// const arrStrings = ["apple", "banana", "cherry"];

// const newStringArr = arrStrings.map(str => str.toUpperCase());

// console.log(newStringArr);
// У вас есть список чисел: [10, 20, 30, 40, 50]. Используя map, разделите каждое число на 10.
// const arrNumbers = [10, 20, 30, 40, 50];

// const newNumbersArr = arrNumbers.map(n => n / 10);

// console.log(newNumbersArr);

// Дан список чисел: [2, 4, 6, 8, 10]. С помощью операции map возведите каждое число в квадрат.

// const arrNumbers = [2, 4, 6, 8, 10];

// const newNumbersArr = arrNumbers.map(n => n ** 2);

// console.log(newNumbersArr);

// У вас есть список строк: ["hello", "world", "map", "list"]. Используя map, определите длину каждой строки.

// const arrStrings = ["hello", "world", "map", "list"];

// const newStringArr = arrStrings.map(str => str.length);

// console.log(newStringArr);
// Дан список чисел: [1, 4, 9, 16, 25]. С помощью map возведите каждое число в куб.

// const arrNumbers = [1, 4, 9, 16, 25];

// const newNumbersArr = arrNumbers.map(n => n ** 3);

// console.log(newNumbersArr);

// У вас есть список чисел: [3, 6, 9, 12, 15]. Используя map, найдите квадратный корень из каждого числа.

// const arrNumbers = [3, 6, 9, 12, 15];

// const newNumbersArr = arrNumbers.map(n => Math.sqrt(n));

// console.log(newNumbersArr);

// Дан список строк: ["cat", "dog", "elephant"]. С помощью map добавьте к каждой строке префикс "My ".

// const arrStrings = ["cat", "dog", "elephant"];

// const newStringArr = arrStrings.map(str => "My " + str);

// console.log(newStringArr);
// У вас есть список чисел: [5, 10, 15, 20, 25]. Используя map, вычтите из каждого числа 3

// const arrNumbers = [5, 10, 15, 20, 25];

// const newNumbersArr = arrNumbers.map(n => n - 3);

// console.log(newNumbersArr);

// У вас есть список строк: ["apple", "banana", "cherry"].Используя map, замените каждую букву "a" на "x".


// const arrStrings = ["apple", "banana", "cherry"];

// const createNewString = (arrStrings) => {
//   let newArr = [];

//   arrStrings.map((str) => {
//     let newWorld = '';
//     for (const ch of str) {
//       if (ch === 'a') {
//         newWorld += 'x';
//       }
//       newWorld += ch;
//     }
//     newArr.push(newWorld);
//   });

//   return newArr;
// };

// console.log(createNewString(arrStrings));

// ---------------------------

// const arrStrings = ["apple", "banana", "cherry"];

// const newArr = arrStrings.map(arr => arr.replace('a', 'x'));

// console.log(newArr)


// Дан список строк: ["hello", "world", "python", "programming"]. С помощью map, выберите только строки, длина которых больше 5 символов.

// const arrStrings = ["hello", "world", "python", "programming"];

// const createNewString = (arrStrings) => {
//   let newStringArr = [];
//   arrStrings.map((str) => {
//     if (str.length > 5) {
//       newStringArr.push(str);
//     }
//   });

//   return newStringArr;
// };

// console.log(createNewString(arrStrings));

// У вас есть список чисел: [2, 5, 8, 11, 14]. Используя map, прибавьте к каждому числу 1.

// const arrNumbers = [2, 5, 8, 11, 14];

// const newNumbersArr = arrNumbers.map(n => n + 1);

// console.log(newNumbersArr);

// Дан список чисел: [1, 3, 5, 7, 9]. С помощью map, проверьте, является ли каждое число нечетным.

// const arrNumbers = [1, 3, 5, 7, 9];

// const isTwin = (arr) => {
//   let notTwin = true;
//   arr.map(n => {
//     if (n % 2 === 0) {
//       notTwin = false;
//     }
//   })

//   return notTwin;
// }

// console.log(isTwin(arrNumbers));

// ------------------

// const arrNumbers = [1, 3, 5, 7, 9];

// const isTwin = arrNumbers.every(n => n % 2 !== 0);

// console.log(isTwin)

// Проверьте, содержат ли все строки в списке ["apple", "banana", "cherry"] букву "a".

// const arrCh = ["apple", "banana", "cherry"];

// const isContain = arrCh.every(ch => ch.includes('a'));

// console.log(isContain);

// -----------------------

// const arrCh = ["apple", "banana", "cherry"];

// const isContain = (arr, ch) => {
//   for (const word of arr) {
//     if (!word.includes(ch)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isContain(arrCh, 'a'))


// Проверьте, заканчивается ли каждое число в списке [4, 8, 12, 16, 20] на цифру 4.

// const arrNumbers = [4, 8, 12, 16, 20];

// const isContain = (arr, numb) => {
//   for (const n of arr) {
//     if (!n.toString().endsWith(numb)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isContain(arrNumbers, 4))

// --------------------------------

// const arrNumbers = [4, 8, 12, 16, 20];

// const isContain = arrNumbers.every(n => n.toString().endsWith(4))

// console.log(isContain)


// Проверьте, содержит ли каждый элемент списка [1, 2, 3, 4, 5] цифру 2.

// const arrNumbers = [1, 2, 3, 4, 5];

// const isContain = arrNumbers.every(n => n.toString().includes('2'));

// console.log(isContain);

// -----------------------

// const arrNumbers = [1, 2, 3, 4, 5];

// const isContain = (arr, number) => {
//   for (const numb of arr) {
//     if (!numb.toString().includes(number)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isContain(arrNumbers, 2))





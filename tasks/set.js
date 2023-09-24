// // Создайте функцию, которая принимает массив и возвращает массив уникальных значений.

// const arr = [1, 'cat', 'cat', 2, 2, 6];

// const uniqSet = new Set(arr);

// console.log(uniqSet)

// // Напишите функцию, которая проверяет, есть ли в массиве дубликаты.
// const arr = [1, 'cat', 'cat', 2, 2, 6];

// const isDubble = (arr) => {
//   let uniq = new Set([]);
//   for (const val of arr) {
//     if (uniq.has(val)) {
//       return true;
//     }
//     uniq.add(val);
//   }
  
//   return false;
// }

// console.log(isDubble(arr));

// // Реализуйте функцию, которая объединяет два массива, исключая повторяющиеся элементы.
// const arr1 = [1, 'cat', 'cat', 2, 2, 6];
// const arr2 = [1, 'cat', 'cat', 3, 3, 6];

// const uniqArr = (arr1, arr2) => {
//   const newUnigSet = new Set([...arr1, ...arr2]);
//   return newUnigSet;
// }

// console.log(uniqArr(arr1, arr2));


// // Создайте функцию, которая находит пересечение двух массивов (общие элементы).
// const arr1 = new Set([1, 'cat', 'cat', 2, 2, 6]);
// const arr2 = new Set([1, 'cat', 'cat', 3, 3, 6]);

// const findeDubble = (arr1, arr2) => {
//   const newUnigSet = new Set();
  
//   for (const val of arr1) {
//     if (arr2.has(val)) {
//       newUnigSet.add(val);
//     }
//   }
//   return newUnigSet;
// }

// console.log(findeDubble(arr1, arr2));

// // Напишите функцию, которая удаляет дубликаты из строки.

// const text = 'banana';

// const deleteDubble = (text) => {

//   const newArrText = text.slice('');

//   const newUniqText = new Set([...newArrText]);

//   return [...newUniqText].join('');
// }
// console.log(deleteDubble(text));
// ---------------------------------
// const text = 'banana';
// const deleteDubble = (text) => {
//   const newUniqCh = new Set();

//   for (const ch of text) {
//     if (!newUniqCh.has(ch)) {
//        newUniqCh.add(ch)
//      }
//   }
//   return [...newUniqCh].join('');
// }

// console.log(deleteDubble(text));

// // Реализуйте функцию, которая находит разницу между двумя массивами (элементы первого, отсутствующие во втором).
// const arr1 = new Set([1, 'cat', 'cat', 2, 2, 6]);
// const arr2 = new Set([1, 'cat', 'cat', 3, 3, 6]);

// const diferenceSet = (arr1, arr2) => {
//   return new Set([...arr1].filter(item => !arr2.has(item)))
// }

// console.log(diferenceSet(arr1,arr2))


// // Создайте функцию, которая проверяет, является ли строка изограммой (содержит только уникальные буквы).

// const text = 'banana';

// const isSogram = (text) => {
//   let uniqCr = new Set();

//   for (const ch of text) {
//     if (uniqCr.has(ch)) {
//       return false;
//     }
//     uniqCr.add(ch);
//   }

//   return true;
// }

// console.log(isSogram(text))

// // Напишите функцию, которая проверяет, является ли одна строка анаграммой другой.

// const text1 = 'line';
// const text2 = 'enir';

// const isAnagram = (text1, text2) => {
//   const newText1 = new Set([...text1]);
//   const newText2 = new Set([...text2]);

//   return newText1.size === newText2.size && [...newText1].every(ch => newText2.has(ch))
// }

// console.log(isAnagram(text1, text2))



// Создайте функцию, которая возвращает случайное уникальное число из заданного диапазона.



// Напишите функцию, которая удаляет все ложные значения из массива (false, null, 0, "", undefined, NaN).

// Реализуйте функцию, которая определяет, есть ли в массиве хотя бы одно общее значение с другим массивом.

// Создайте функцию, которая находит самый часто встречающийся элемент в массиве.

// Напишите функцию, которая объединяет несколько массивов, оставляя только общие элементы.

// Реализуйте функцию, которая удаляет из массива элементы, соответствующие заданному критерию.
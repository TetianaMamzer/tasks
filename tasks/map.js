// Сравнение словарей: Напишите программу, которая сравнивает два словаря и находит общие ключи, различные ключи, а также значения, которые есть только в одном из словарей.

// const set1 = [[1, 'a'], [2, 'b'], [3, 'c']];
// const set2 = [[3, 'a'], [4, 'b'], [5, 'd']];

// function findCommonKeys(set1, set2) {

//   let uniqSet = new Map([...set1]);

//   let setDubbleKeys = []

//   for (const [key, val] of set2) {
    
//     if (uniqSet.has(key)) {
//       setDubbleKeys.push(key, val);
//     }
    
//   }

//   return setDubbleKeys;
// }

// function findDifferentKeys(set1, set2) {

//   let uniqSet = new Map([...set1]);

//   for (const [key, val] of set2) {
    
//     if (!uniqSet.has(key)) {
//       uniqSet.set(key, val);
//     }
    
//   }

//   return uniqSet;
// }

// function findUniqueValues(set1, set2) {
//   const map1 = new Map(set1);
//   const map2 = new Map(set2);
//   let uniqSet = [];
//   let uniqSet2 = [];

//   for (const item of map1.values()) {
//     uniqSet.push(item)
//   }

//   for (const item of map2.values()) {
//     uniqSet2.push(item)
//   }

//   const newUniqSet = new Set([...uniqSet, ...uniqSet2]);


//   return newUniqSet
// }

// function compareSets(set1, set2) {
//   const commonKeys = findCommonKeys(set1, set2);
//   const differentKeysSet2 = findDifferentKeys(set1, set2);
//   const uniqueValuesSet2 = findUniqueValues(set1, set2);

//   return {
//     commonKeys,
//     differentKeysSet2,
//     uniqueValuesSet2,
//   };
// }

// const comparisonResult = compareSets(set1, set2);

// console.log(comparisonResult);

// Страны и столицы: Создайте словарь, который содержит названия стран и их столицы. Напишите программу, которая по названию страны выводит ее столицу, а по названию столицы - страну.

// const countryAndCenter = new Map([['Australia', 'Canberra'], ['Austria', 'Vienna'], ['Belgium', 'Brussels'], ['Brazil', 'Brasilia']]);

// function findCountryAndCenter(arr, val) {
  
//   let value = '';

//   arr.forEach((country, city) => {
//     if (city === val) {
//       value =  country;
//     }

//     if (country === val) {
//       value =  city;
//     }
//   })

//   return value;
// }

// const findValue = findCountryAndCenter(countryAndCenter, 'Vienna');

// console.log(findValue);
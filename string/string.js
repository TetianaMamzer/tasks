// // Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘viagra’ or ‘XXX’, інакше false.

// // Функція має бути нечутливою до регістру:

// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam('innocent rabbit');

// function checkSpam(str) {
//   if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {
//     console.log(true);
//     return true;
//   }
//   console.log(false);
//   return false;
// }

// // Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.

// // Результатом функції повинен бути урізаний (якщо потребується) рядок.


// truncate("Що я хотів би розповісти на цю тему:", 20)

// truncate("Всім привіт!", 20)

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     const createStr = str.slice(0, maxlength - 1) + '...';
//     console.log(createStr);
//     return createStr;
//   }

//   console.log(str)
//   return str;
// }

// // У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.

// // Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.

// extractCurrencyValue('$120', 120); // true

// function extractCurrencyValue(str, number) {

//   let newStr = '';

//   for (const ch of str) {
//     if (!isNaN(ch)) {
//       newStr += ch
//     }
//   }

//   console.log(newStr == number );
//   return newStr == number;
// }
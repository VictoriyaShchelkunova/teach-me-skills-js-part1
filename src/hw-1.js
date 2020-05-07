/**
 * Напишите код, чтобы вызвав эту фукнцию с 2 чсилами и одной строкой вы получили их сумму в переменной sum
 * если строка придет с символами, то результат функции должна быть строка "неверные данные"
 */

function task1(num1, num2, str) {
  let sum = null;
  str = Number(str);

  if (str || str === 0) {
    sum = num1 + num2 + str;
  } else {
    sum = 'неверные данные';
  }
  return sum;
}

console.log(task1(1, 2, '0'));
console.log(task1(1, 2, 'am'));


/*Код ниже перепишете с использованием switch

let result = null;

if (age > 5) {
  result = 'Он старше 5 лет';
} else if (age > 8) {
  result = 'Он старше 8 лет';
} else if (age > 11) {
  result = 'Он старше 11 лет';
} else {
  result = 'Нет подходящего возраста';
}*/

function task2(age) {
  let result = null;
  switch (age) {
    case 5:
    case 6:
    case 7:
    case 8: {
      result = 'Он старше 5 лет';
      break;
    }
    case 9:
    case 10:
    case 11: {
      result = 'Он старше 8 лет';
      break;
    }
    case 12:
    case 13:
    case 14:
    case 15: {
      result = 'Он старше 11 лет';
      break;
    }
    default: {
      result = 'Нет подходящего возраста';
    }

  }
  return result;
}

console.log(task2(6));

/**
 * Используя while напишите цикл от 0 до 21 и каждое нечетное число суммируйте к переменной result
 *
 */
function task3() {
  let result = 0;
  let count = 0;
  while (count < 21) {
    if (count % 2) {
      result += count;
    }
    count++;
  }
  return result;
}
console.log(task3());

/**
 * Используя for напишите цикл от 0 до 100. На каждой итерации, что делится на 5 без остатка
 * в консоль нужно отображать цифру 5.
 *
 */
function task4() {
  for (let count = 0; count < 100; count++) {
    if (count % 5) {
    } else {
      console.log(5);
    }
  }
}
task4();

/**
 * В функцию приходят 4 аргумента все разных типов, какие бы не были значения результат всегда должен быть один и тот же, true
 *
 */

function task5(num, str, bool, val) {

  for(let i = 0; i < arguments.length; i++){
    arguments[i] = true;
  }


  let result = num || str || bool || val; // выражение с || менять нельзя, остальное в ваших руках


  return result;
}

console.log(task5(3, '', false, 'hello'));
console.log(task5(0, '', false, undefined));


/**
 * Вы должны дополнить код так, чтобы переменная result была не больше number
 */
function task6(number) {
  let result = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {

      if (result < number) {
        result += i + j;
        if (result >= number) {
          result -= (i + j);
        }
      }
    }
  }

  return result;
}

console.log(task6(18));
console.log(task6(32))


/**
 * Написать такой цикл, чтобы заполнить переменную result символами своего имени,
 * таким образом результатом этой функции будет ваше имя.
 *
 */
function task7() {
  let result = null;
  result = '';
  let name = 'Victoriya';
  for (let i = 0; i < name.length; i++) {
    result += name[i];
  }
  return result;
}

console.log(task7());


/**
 * Задание с *.
 * Написать код таким образом, чтобы можно было выполнить любое матемптичиское действие с num и str
 */
function task8(num) {
  let str = '10n';
  let strRes = '';
  let result = null;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (Number(letter) || letter === '0') {
      strRes += letter;
    }
  }
  str = Number(strRes);
  result = num / str;
  return result;
}

console.log(task8(20));

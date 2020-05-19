/**
 * Проверить строку str на уникальные символы, если все символы в строке встречаются один раз, то
 * функция должна возвращать true, в противном случаи false
 * Например:
 *  "avbhye3" => true
 *  "afsbvra" => false
 *  "Aaret64ip" => true
 */
function task1(str) {

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(task1('Aaret64ip'));

/**
 * Проверить строку str на буквы, если в строке есть буквы, то их нужно вынести в переменную result и вернуть эту
 * переменную
 */
function task2(str) {
  let arrFromStr = [...str];
  const result = arrFromStr.filter(letter => isNaN(letter)).join('');

  return result;
}
console.log(task2('ab2cd1'));
console.log(task2('ab2cd1efg35'));

/**
 * arr массив чисел. Нужно найти в массиве найбольшое число и вернуть его
 */
function task3(arr) {
  return Math.max(...arr);
}
console.log(task3([1, 23, 345, 14]));

/**
 * В функцию приходит объект obj. Нужно скопировать все его свойства в объект result и вернуть его
 */
function task4(obj) {
  const result = JSON.parse(JSON.stringify(obj));

  return result;
}

console.log(task4({
  name: 'Mike',
  surname: 'Smith',
  age: 25,
  address: {
    country: 'USA',
    city: 'Boston'
  }
}))

/**
 * Приходит строка str такого вида "Ivan Ivanov", вы должны сохранить первые символы в переменную result. Должен
 * иметь такой вид "I.I."
 * Еще пример: str => "Vitalik Skopets". result => "V.S."
 */
function task5(str) {
  const arrFromStr = str.split(' ');
  return (`${arrFromStr[0][0]}.${arrFromStr[1][0]}.`);
}
console.log(task5("Ivan Ivanov"));
console.log(task5("Vitalik Skopets"));


/**
 * Написать логику, которая будет возвращать название планеты. По ее номеру начиная от ближайшей к солнцу.
 * Примечание: написать эту логику без if и switch!!!!!!!
 */
function task6(num) {
  const planets = {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
    9: 'Pluto'
  }
  return planets[num];
}
console.log(task6(6));



/**
 * Функция должна удалять первый и последний символы из строки str и вернуть получившеюся строку.
 */
function task7(str) {
  return str.slice(1, str.length - 1);
}
console.log(task7('hello'));

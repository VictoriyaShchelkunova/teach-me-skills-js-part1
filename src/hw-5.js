/**
 * Написать функцию, которая будет принимать бесконечное количество аргументов(коллбэк кфнкций) и во втором вызове
 * бесконечное количесвто аргументов.
 * Например: foo(foo1(foo2(10)))
 * Ваша функция должна выглядеть так:
 * task1(foo, foo1, foo2)(10);
 */
function task1(...rest) {
    return function (num) {
        return rest.reverse().reduce((previousValue, callbackFunction) => callbackFunction(previousValue), num)
    }
}
console.log(task1(function (arg) { return arg }, function (arg) { return arg }, function (arg) { return arg })(10));

/**
 * Напсиать функцию, которая будет принимать строку. Функция должна проверить явяляется ли строка палиндромом
 */
function task2(str) {
    return str === str.split('').reverse().join('');
};
console.log(task2('топот'));


/**
 * Написать функцию, которая будет принимать целое число n. Нужно вывести в консоль числа от 1 до n.
 * Вместо чисел кратных на 3 выводить fizz, вместо чисел кратных 5 - buzz. Если числа кратные 15, то fizzbuzz
 */
function task3(n) {
    for (let i = 1; i <= n; i++) {
        if (!(n % 3) && !(n % 5)) {
            console.log('fizzbuzz');
        } else if (!(n % 3)) {
            console.log('fizz');
        } else if (!(n % 5)) {
            console.log('buzz');
        } else {
            console.log(n);
        }
    }
}
console.log(task3(10));

/**
 * Напсиать функцию, что будет принимать 2 аргумента, строки. Вы должны проверить является ли второе слово анаграммой
 * второго.
 * Примеры:
 * anagram('finder', 'Friend'); => true
 * anagram('', ''); => false
 */
function task4(...rest) {
    rest = rest.map(word => {
        if (word) {
            return word.toUpperCase().split('').sort().join('')
        } else {
            return null;
        }
    });
    return (rest[0] && rest[1]) ? rest[0] === rest[1] : false;
}
console.log(task4('finder', 'Friend'));
console.log(task4('', ''));
/**
 * Написать функцию, которая будет принимать число. Функция должна возвращать массив чисел, которые являются делителями.
 */
function task5(num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (!(num % i)) {
            arr.push(i);
        };
    }
    return arr;
};
console.log(task5(10));
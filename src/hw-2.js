/**
 * Напишите логику, которая умножает все числовые свойства объекта obj на переменную num.
 */
function task1(num) {
  const obj = {
    name: 'Valera',
    age: 20,
    height: 300,
    weight: 30,
    surname: 'Trololo',
  };
  for (const key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= num;
    }
  }

  return obj;
}

console.log(task1(2).age);
console.log(task1(3).height);
console.log(task1(5).weight);


/**
 * Напишите код для суммирования всех значений из obj и сохраните результат в переменной sum.
 */
function task2(num) {
  let sum = null;
  const obj = {
    a: 20,
    b: 10,
    c: 50,
    d: 1,
    e: 5,
  };
  for (const key in obj) {
    sum += obj[key];
  }

  return sum;
}
console.log(task2());


/**
 * Напишите код для проверки на существование свойства в объекте. Если свойство property существует в obj,
 * то функция должна возвращать true, в противном случаи false
 */
function task3(obj, property) {
  let result = null;
  for (const key in obj) {
    result = key === property ? true : false;
  }
  return result;
}

console.log(task3({ surname: 'Ivanov', name: 'Mike' }, 'name'));
console.log(task3({ surname: 'Ivanov' }, 'name'));

/**
 * Написать логику, что скопирует все свойства из obj в result.
 */
function task4(obj) {
  const result = {};

  for (const key in obj) {
    result[key] = obj[key];
  }

  return result;
}

console.log(task4({ name: 'Mike', surname: 'Ivanov' }));
console.log(task4({ name: 'Kate', surname: 'Petrova' }));

/**
 * Ваша реализацимя должна проверить в каком объекте obj1 или obj2 свойств больше, в переменную result
 * положите 1 или 2 в зависимости в каком объекте свойств больше
 */
function task5(obj1, obj2) {


  let countKeysObj1 = Object.keys(obj1).length;
  let countKeysObj2 = Object.keys(obj2).length;

  return result = (countKeysObj1 - countKeysObj2) > 0 ? 1 : 2;


}

console.log(task5({ name: 'Mike', surname: 'Ivanov' },
  { name: 'Kate', surname: 'Petrova', age: '15' }));

/**
 * Написать логику, которая должна удалять все свойства из объекта obj.
 */
function task6(obj) {
  for (const key in obj) {
    delete obj[key];
  }
  return obj;
}

console.log(task6({ name: 'Kate', surname: 'Petrova', age: '15' }))

/**
 * Задание с *.
 * Написать цикл (не for..in), который пройдется по объекту obj и выведет все значения в консоль
 */
function task7(obj) {

  const arrObjValues = Object.values(obj);

  for (let i = 0; i < arrObjValues.length; i++) {
    console.log(arrObjValues[i]);
  }
}

task7({ name: 'Kate', surname: 'Petrova', age: '15' });

/**
 * Задание с *.
 *  В функции есть 2 аргумента, объект и строка. Написать логику, чтобы их сумма была такого вида:
    obj = {}
    str = "Vitalik"
    Значит результат должен быть "Hello Vitalik"
    Или
    obj = {}
    str = "Katya"
    Результат: "Hello Katya"
 */
function task8(obj, str) {
  let result = null;

  obj.toString = function () {
    return 'Hello ';
  }

  result = obj + str;
  return result;
}

console.log(task8({}, 'Vitalik'));
console.log(task8({}, 'Katya'));

/**
 * Задание с *.
 * Все аргументы функции должны добавляться в массив.
 */
function task9() {
  const array = [];
  for (let i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }

  return array;
}
console.log(task9(1, 'hello', true, null));
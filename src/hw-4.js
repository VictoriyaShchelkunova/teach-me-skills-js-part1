/**
 * Написать функцию, которая будет считать ряд Фибоначчи. Функция должна возвращать массив из чисел
 * Фибоначчи, длина массива будет приходить, как аргумент функции
 */
function fibonacci(length) {
    let arr = [0, 1];
    for (let i = 0; i < length - 2; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr;
};
console.log(fibonacci(10));

/**
 * Написать свою функцию map
 */
function map(array, callback) {
    let arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        arrayResult[i] = callback(array[i]);
    }
    return arrayResult;
}
console.log(map(['hello', 'name', 'surname'], function (item) {
    return item.length;
}));
console.log(map([3, 27, 15], function (item) {
    return item / 3;
}));

/**
 * Написать свою функцию filter
 */
function filter(array, callback) {
    let arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            arrayResult.push(array[i]);
        }
    }
    return arrayResult;
}
console.log(filter([1, 2, 35, 56], function (item) {
    return item % 2 === 0 ? true : false;
}));

/**
 * Написать свою функцию indexOf
 */
function indexOf(array, value, fromIndex) {
    let i = fromIndex ? fromIndex : 0;
    for (; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};
console.log(indexOf([1, 3, 115, 37], 115, 1));
console.log(indexOf([1, 3, 115, 37], 3, 2));

/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {

    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i]);
    }

    return acc;
};
console.log(reduce(['h', 'e', 'l', 'l', 'o'], function (acc, item) {
    return acc += item;
}, ''));

/**
 * Написать свою функцию find
 */
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        };
    }

};
console.log(find([1, 2, 12, 45], function (item) {
    if (item === 45) {
        return true;
    };
}));


/**
 * Написать свою функцию sort
 */
function sort(array, callback) {
    if (callback === undefined) {
        for (let j = 0; j < array.length; j++) {
            for (let i = 0; i < array.length; i++) {
                let first = array[i];
                let second = array[i + 1];
                if ((second + '') < (first + '')) {
                    array[i] = second;
                    array[i + 1] = first;
                }
            }
        }

        return array;
    } else {
        for (let j = 0; j < array.length; j++) {
            for (let i = 0; i < array.length; i++) {
                let first = array[i];
                let second = array[i + 1];
                if (callback(first, second)) {
                    array[i] = second;
                    array[i + 1] = first;
                }
            }
        }

        return array;

    }

}
console.log(sort([1, 10, 3, 4, 112, 5, 37]));

console.log(sort([1, 10, 3, 4, 112, 5, 37], function (a, b) {
    return a > b;
}));

/**
 * Написать свою функцию Object.keys
 */
function objectKeys(obj) {
    let arr = [];
    for (const key in obj) {
        arr.push(key);
    }
    return arr;
};
console.log(objectKeys({
    name: 'Lera',
    surname: 'Ivanova',
    age: 23
}));


/**
 * Написать свою функцию Object.values
 */
function objectValues(obj) {
    let arr = [];
    for (const key in obj) {
        arr.push(obj[key]);
    }
    return arr;
};
console.log(objectValues({
    name: 'Lera',
    surname: 'Ivanova',
    age: 23
}));

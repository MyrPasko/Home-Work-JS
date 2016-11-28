/**
 * Created by user on 23.11.2016.
 */

// 1. Разобрать функции обхода матриц. (map, ever, some и т.п.).
// 2. Сгенерировать массив случайных чисел типа integer, размером 1 000 000.
// Отсортироать его по возрастанию и по убыванию. Найти сумму елементов.
//     Вывести результат в консоль( 3 массива, сумма, время работы циклов сортировки и генерации).
// 3. На скрине дано 3 матрици. А - матрица рядов, Б матрица столбов, С матрица опорного плана( квадратная матрица).
// Решить транспортную задачу на основе этих матриц методом Северо- Западного угла.



// int[,] matrixC = new int [3, 4] {{1, 3, 4, 2}, {4, 5, 8, 3}, {2, 3, 6, 7}};
// int[] matrixA = new int [3] {60, 80, 100};
// int[] matrixB = new int [4] {40, 60, 80, 60};

// var arry = [10];

// function timeBeginning() {
//     var startDate = new Date() * 1000;
//     return startDate;
// }
//
// function timeEnding() {
//     var endDate = new Date() * 1000;
//     return endDate;
// }

var array = [];
var startDate = new Date() * 1000;
for (var i = 0; i < 1000000; i++) {
    array.push(Math.round(Math.random()*1000000));
}
var endDate = new Date() * 1000;
console.log(array);


var startSort = new Date() * 1000;
array.sort(function(a, b) {
    return a - b;
});
var endSort = new Date() * 1000;
console.log(array);


var startSortReverse = new Date() * 1000;
array.sort(function(a, b) {
    return b - a;
});
var endSortReverse = new Date() * 1000;
console.log(array);


var startSumming = new Date() * 1000;
var result = array.reduce(function (sum, val) {
    return sum + val;
})
var endSumming = new Date() * 1000;
console.log('Сумма элементов массива: ' + result);


console.log('Время формирования массива - ' + (endDate - startDate));
console.log('Время сортировки массива - ' + (endSort - startSort));
console.log('Время сортировки массива в обратном порядке - ' + (endSortReverse - startSortReverse));
console.log('Время суммирования элементов массива - ' + (endSumming - startSumming));



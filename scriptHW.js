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



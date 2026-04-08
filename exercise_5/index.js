"use strict";
//  1 echo function with generic
function echo(input) {
    return input;
}
const myName = echo('maxamed');
console.log(myName.toUpperCase());
const age = echo(20);
console.log(age);
const User = echo({ name: 'faarax', age: 20 });
console.log(User);
//  arrays
const itemsArray = echo(['apple', 'tomato']);
console.log(itemsArray);
const stringApiResponse = {
    status: 'success',
    data: 'Done'
};
console.log(stringApiResponse);
const apiResult = {
    status: 'success',
    data: { id: 1, name: 'faatax', age: 30 }
};
console.log(apiResult);
// 3 firstElement 
function firstItem(items) {
    return items[0];
}
const strinArray = firstItem(['apple', 'mango']);
console.log(strinArray);
const numberArray = firstItem([12, 13, 15, 30]);
console.log(numberArray);
const students = firstItem([{ id: 12, name: "caasho", age: 20 }]);
console.log(students);

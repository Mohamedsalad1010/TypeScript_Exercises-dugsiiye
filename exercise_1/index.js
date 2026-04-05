"use strict";
// 1 productname has string
let productName = 'sumsangA12';
let price = 100;
let disAccountAvaliable = true;
//  2
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(100, 0.2));
//  3
function printLength(x) {
    if (typeof x === 'string') {
        console.log('latter ', x);
        console.log('latter length:', x.length);
    }
    if (typeof x === 'number') {
        console.log('number 2 digit', x.toFixed(2));
    }
}
printLength('hello');
printLength(1234);

"use strict";
//  1
function fullName(first, last) {
    return `firstName: ${first}  lastName: ${last}`;
}
console.log(fullName("cali", "jaamac"));
// 2
function registerUser(userName, isAdmin, language = "en") {
    return userName + " " + isAdmin + " " + language;
}
console.log(registerUser('cali', true, 'somaali'));
// 3
function avergae(...scores) {
    const average = scores.reduce((a, b) => a + b, 0);
    return average / scores.length;
}
console.log('average:', avergae(12, 10, 30).toFixed(2));

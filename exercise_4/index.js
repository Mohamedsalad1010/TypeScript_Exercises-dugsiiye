"use strict";
function login(user) {
    console.log(user.userName, user.password);
}
login({ userName: 'cali', password: '1234' });
function login1(user) {
    console.log(user.userName, user.password);
}
login1({ userName: 'cali', password: '1234', email: '1234' });
login1({ userName: 'cali', password: '1234' });

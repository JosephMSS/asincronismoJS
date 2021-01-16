function seconds(sec) {
    return 1000*sec;
}
function sum(num1,num2) {
    return num1+num2;
}

function calc(num1,num2, callback) {
    return callback(num1,num2);
}

console.log(calc(2,2,sum));

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date=new Date;
        callback(date);
    },seconds(3));
}

function print_date(date_now) {
    console.log(date_now);
}
date(print_date);
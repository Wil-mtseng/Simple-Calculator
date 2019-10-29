function add(x, y) {
    return x + y;
};

function add1(x, y) {
    return x + y;
};

function add2(x, y) {
    return x + y;
};

function sum() {
    sum = 0;
    for (i = 0; i <= arguments.length; i++) {
        sum += i;
    }
    return sum;
};


function multiply(x, y) {
    return x * y;
};


function times() {
    sum = 1;
    for (i = 0; i <= arguments.length; i++) {
        sum *= i;
    }
    return sum;
};
module.exports = {
    add,
    add1,
    add2,
    sum,
    multiply,
    times

};
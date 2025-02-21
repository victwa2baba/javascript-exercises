const fibonacci = function(num) {
    let count;
    if (typeof num !== 'number') {
        count = parseInt(num);
    } else {
        count = num;
    }

    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let next = 1;
    let prev = 0;
    for (let i = 2; i <= count; i++) {
        let current = next + prev;
        prev = next;
        next = current;
    } return next;
};

// Do not edit below this line
module.exports = fibonacci;

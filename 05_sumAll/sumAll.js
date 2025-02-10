const sumAll = function(x, y) {
    if (x < 0 || y < 0 || x % 1 !== 0 || y % 1 !== 0 || typeof x !== 'number' || typeof y !== 'number')  {
        return "ERROR"
    }

    smaller = x < y ? x : y
    larger = x > y ? x : y
    /*above is spaghetti code, this would have been better: 
    if (x < y) {
        smaller = x
        larger = y
    }
    else {
        smaller = y
        larger = x
    }
    
    Or just assume that the first is min and second is max in parameters like TOP, then you can do even more efficiently. Lol
    */
    if (x == y) return x;

    total = 0;
    for (let i=smaller; i <= larger; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;

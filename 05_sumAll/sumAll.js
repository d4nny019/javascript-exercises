const sumAll = function(from, to) {
    let counter = 0
    if ((from < 0 || to < 0)||(typeof(to)!="number")) { return "ERROR"
    } else {
        if (from < to) {
        for (let i = from; i <= to; i++) {
            counter += i
        }
        } else {
            for (let i = to; i <= from; i++) {
            counter += i
            }
        }
        return counter;
    }
};

// Do not edit below this line
module.exports = sumAll;

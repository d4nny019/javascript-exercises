const reverseString = function(str) {
    let strRev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strRev += str[i];
    }
    return strRev;
};

// Do not edit below this line
module.exports = reverseString;
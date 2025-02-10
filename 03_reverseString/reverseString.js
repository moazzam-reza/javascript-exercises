const reverseString = function(cs) {
    let returnString = "";
    
    for (let c of cs) {
        returnString = c + returnString;
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;

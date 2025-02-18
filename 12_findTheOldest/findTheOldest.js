const findTheOldest = function(arr) {
    let ageToName = {};

    for (let obj of arr) {
        let yearOfDeath;

        if (obj.yearOfDeath === undefined) {
            yearOfDeath = new Date().getFullYear();
        } 
        else {
            yearOfDeath = obj.yearOfDeath;
        }

        ageToName[yearOfDeath - obj.yearOfBirth] = obj.name;
    }

    let orderedAges = Object.keys(ageToName).sort((a, b) => +a - +b);

    return arr.find((obj) => obj.name == ageToName[orderedAges.at(-1)]);
};

// Do not edit below this line
module.exports = findTheOldest;

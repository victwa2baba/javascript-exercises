const getTheAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear()
    } return death - birth;
}

const findTheOldest = function(thePeople) {
    return thePeople.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getTheAge (oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getTheAge (currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;

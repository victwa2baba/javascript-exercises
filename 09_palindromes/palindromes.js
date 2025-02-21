const palindromes = function (strn) {
    //create a variable to hold the supported strings
    const alphanumb = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    //convert parameter to lowerCase, split to array of individual characters,
    // filter only valid characters by comparing it to alphanumb, rejoin
    const strings = strn
        .toLowerCase()
        .split("")
        .filter((character) => alphanumb.includes(character))
        .join("");
    
    //create a new variable reversedStrings 
    //split the function parameter, reverse and join
    //return the param === reversed

    const reversedString = strings
        .split("")
        .reverse()
        .join("");
    
        return strings === reversedString;

};

// Do not edit below this line
module.exports = palindromes;

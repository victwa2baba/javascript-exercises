const leapYears = function(param) {
    if (param % 4 === 0 && param % 100 != 0 || param % 400 === 0) { 
        return true;
    } else  
        return false;
    }
    

// Do not edit below this line
module.exports = leapYears;

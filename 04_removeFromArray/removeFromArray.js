const removeFromArray = function(array, ...second) {
    let newArray = [];
    array.forEach((arrays) => {
        if (!second.includes(arrays)) {
            newArray.push(arrays);
        }
    });  return newArray;
} 

// Do not edit below this line
module.exports = removeFromArray;

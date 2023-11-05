const repeatString = function(str, num) {
    if(num < 0){
        return 'ERROR'
    }

    let str1  = ''
    for(let int = 0; int < num; int++) {
        str1 += str
    }
    return str1;

};

// Do not edit below this line
module.exports = repeatString;

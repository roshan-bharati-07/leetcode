var myAtoi = function (s) {
    let hasIndicator = false
    let num = 0
    let string = s.trim()


    const MIN = -Math.pow(2, 31);
    const MAX = Math.pow(2, 31) - 1;


    let set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])


    if (string[0] === "+") {
        string = string.slice(1)
    }
    else if (string[0] === "-") {
        hasIndicator = true
        string = string.slice(1)
    }

  


    for (const char of string) {
        if (!set.has(char)) break
        // word += char   
        num = num * 10 + (char - "0");
    }

    if (hasIndicator) {
        // word = "-" + word
        num = -num
    }



    if (num > MAX) {
        return MAX;
    }

    if (num < MIN) {
        return MIN;
    }

    // if ( word.length <= 0)  return 0  

    return num
};


console.log(myAtoi("-91283472332"))
console.log(myAtoi("42"))
console.log(myAtoi("+-1"))






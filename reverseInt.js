var reverse = function (x) {

    

    const MIN = -Math.pow(2, 31);     
    const MAX = Math.pow(2, 31) - 1;   


    let isNegative = false
    if (Math.sign(x) === -1) {
        isNegative = true
    }
    let string = String(Math.abs(x)).split('').reverse().join('')

    if (isNegative) {
        string = "-" + string
    }

    const revNum = Number(String)

    
    if (revNum < MIN || revNum > MAX) {
        return 0;
    }

    return revNum

};


console.log(reverse(-123))
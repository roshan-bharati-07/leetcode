var isPalindrome = function (x) {

    if (isNaN(x)) {
        return false
    }

    const MIN = -Math.pow(2, 31);
    const MAX = Math.pow(2, 31) - 1;

    const string = String(x).trim()

    // for only one sign 
    if (["-", "+", "+-", "-+"].includes(string[0])) {
        return false
    }

    const newString = string.split("").reverse().join("")

    if (string === newString) return true
    else return false


};

console.log(isPalindrome())




// abcd = length = 4 , starting i = 4 , 3, 2, 1 ( not 0 )
// for (let i = string.length - 1; i > 0; i--) {
//     num
// }
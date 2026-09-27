var isMatch = function (s, p) {
    const specialChar = [".", "*"]

    const doShas = specialChar.some(s => s.includes(s))

    if (doShas) {
        // find the index of . or and compare with p 
        // special treatment with *

        const indexOfdot = s.indexOf(".")
        const indexOfasterik = s.indexOf("*")  
       
     
     
    }
};

isMatch("ro.shan*", true)
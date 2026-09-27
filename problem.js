var lengthOfLongestSubstring = function (s) {
    let longest = ""

    for (let i = 0; i < s.length; i++) {
        let word = s[i]
        for (let j = i + 1; j < s.length; j++) {
            if(word.includes(s[j])) {
                break 
            }

            word += s[j]
        }

        if(word.length > longest.length) {
            longest = word
        }
    }

    return longest.length
};


console.log(lengthOfLongestSubstring("pwwkew"))
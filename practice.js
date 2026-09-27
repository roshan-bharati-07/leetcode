const newSet = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
// const newSet = new Set()
// newSet.add('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')
console.log(newSet)
if(newSet.has('4')) {
    console.log("Set does include this string")
}
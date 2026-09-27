var findMedianSortedArrays = function (nums1, nums2) {
    let median;
    const newArray = [...nums1, ...nums2].sort((a, b) => a - b)
    const medianPosition = ((newArray.length + 1) / 2)


    if (Number.isInteger(medianPosition)) {
        median = newArray[medianPosition - 1]
    } else {
        const lowerMedianPosition = Math.trunc(medianPosition)
        console.log(lowerMedianPosition)
        const upperMedianPosition = lowerMedianPosition + 1

        median = (
            newArray[lowerMedianPosition - 1] +
            newArray[upperMedianPosition - 1]
        ) / 2;
    }
    return median

};

console.log(findMedianSortedArrays([1, 2, 5], [3, 4]))
// var addTwoNumbers = function(l1, l2) {

//    const newL1 = Number(l1.toReversed().join("")) 
//    const newL2 =  Number(l2.toReversed().join(""))

//    const sum = (newL1 + newL2).toString()
//    const newArray  = Array.from(sum)
//    console.log(newArray.toReversed())

  
// };

// addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])


// CORRECT ONE 

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    console.log(dummy)
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
};


addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])

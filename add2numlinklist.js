function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// helper: array -> linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    console.log("dummy.next", dummy.next);
    return dummy.next;
}

// helper: linked list -> array (for viewing the result)
function listToArray(node) {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

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
        console.log(current.next)
        current = current.next;
    }

    return dummy.next;
};

// Usage:

const l1 = arrayToList([9,9,3,4]);
const l2 = arrayToList([9,9,9,9]);
const result = addTwoNumbers(l1, l2);
console.log(listToArray(result));
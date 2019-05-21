function mutrix_row(a, index) {
  return a[index];
}

function mutrix_col(a, index) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (index === j) {
        arr.push(a[i][j]);
      }
    }
  }
  return arr;
}

function vector_dot(a, b) {
  let calc = 0;
  for (let i = 0; i < a.length; i++) {
    calc += a[i] * b[i];
  }
  return calc;
}

function matrix_mul(a, b) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    let row = mutrix_row(a, i);
    for (let j = 0; j < b[0].length; j++) {
      let col = mutrix_col(b, j);
      let r = vector_dot(row, col);
      res.push(r);
    }
  }
  return res;
}

let r = matrix_mul([[1, 2, 3], [4, 5, 6]], [[-1, -2], [-3, -4], [-6, -5]]);
// console.log("calc:", r);

//
var sortedSquares = function(A) {
  return A.map(e => Math.pow(e, 2)).sort((a, b) => a - b);
};

let a1 = sortedSquares([-20, -19, -14, 18]);
// console.log("ans1:", a1);

var sortArrayByParity = function(A) {
  let arr = Array(A.length);
  let i = 0;
  let j = A.length - 1;

  for (const item of A) {
    if (item % 2 === 0) {
      arr[i] = item;
      i += 1;
    } else {
      arr[j] = item;
      j -= 1;
    }
  }
  return arr;
};

let a2 = sortArrayByParity([3, 1, 2, 4]);
// console.log("ans2:", a2);

/**
 * @param {number[]} A
 * @return {number}
 * set不能存重复数据
 */
var repeatedNTimes = function(A) {
  let set = new Set();
  let len = 0;
  for (const elem of A) {
    set.add(elem);
    len += 1;
    if (set.size != len) {
      return elem;
    }
  }
};
var a3 = repeatedNTimes([12, 62, 62, 97, 62, 62, 62, 18, 62]);
// console.log("ans3:", a3);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(value) {
    if (this.next === null) {
      this.next = new Node(value);
      return;
    }
    this.next.add(value);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    this.head.add(value);
  }

  popHead() {
    if (this.head === null) {
      return new Error("LinkedList is empty!");
    }
    let head = this.head;
    this.head = this.head.next;
    return head;
  }

  popTail() {
    let head = this.head;
    let tartget = null;
    while (head.next.next !== null) {
      head = head.next;
    }
    tartget = head;
    head.next = null;
    return tartget;
  }

  print() {
    for (let node = this.head; node !== null; node = node.next) {
      console.log("node:", node.value);
    }
  }
}

let run = function() {
  console.log("run!!");
};

// let ll = new LinkedList();
// ll.add(run);
// ll.add(run);
// ll.add(run);
// let node = ll.popHead();
// node.value();

/*
python 动态
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseList = function(head) {
  let prev = null;
  let cur = head;
  while (cur !== null) {
    let tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }
  return prev;
};

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

var middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
console.log(middleNode(n1));

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
  return A.sort((a, b) => {
    let r1 = a % 2 == 0;
    let r2 = b % 2 == 0;
    return r1 && r2 ? 0 : 1;
  });
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
var a3 = repeatedNTimes([
  12,
  62,
  62,
  30,
  62,
  96,
  97,
  62,
  62,
  6,
  73,
  62,
  62,
  5,
  62,
  8,
  64,
  62,
  18,
  62
]);
console.log("ans3:", a3);

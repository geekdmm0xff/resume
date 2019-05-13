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
    for (let j = 0; j < b[i].length; j++) {
      let col = mutrix_col(b, j);
      let r = vector_dot(row, col);
      res.push(r);
    }
  }
  return res;
}

let r = matrix_mul([[1, 2, 3], [4, 5, 6]], [[-1, -2], [-3, -4], [-6, -5]]);
console.log("calc:", r);

function fibs(num) {
  let arr = [];
  let c;
  for (let i = 0; i < num; i++) {
    if (i == 0) arr.push(0);
    if (i == 1) arr.push(1);
    if (i >= 2) {
      c = arr[i - 2] + arr[i - 1];
      arr.push(c);
    }
  }
  return arr;
}

// Using Recursion
function fibsRec(num, arr = []) {
  if (num <= 1) {
    arr.push(0);
    return arr;
  } else if (num == 2) {
    arr.push(0, 1);
    return arr;
  } else {
    let returnedArray = fibsRec(num - 1, arr);
    let sum = returnedArray.at(-1) + returnedArray.at(-2);
    arr = [...returnedArray, sum];

    return arr;
  }
}

console.log(fibsRec(5));

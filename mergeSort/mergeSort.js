let array = [2, 7, 3, 8, 5, 1, 4];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  const leftHalf = mergeSort(arr.slice(0, mid));
  const rightHalf = mergeSort(arr.slice(mid, arr.length));
  const merged = [];

  let i = 0;
  let j = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      merged.push(leftHalf[i]);
      i++;
    } else {
      merged.push(rightHalf[j]);
      j++;
    }
  }

  for (; i < leftHalf.length; i++) {
    merged.push(leftHalf[i]);
  }

  for (; j < rightHalf.length; j++) {
    merged.push(rightHalf[j]);
  }

  return merged;
}

console.log(mergeSort(array));

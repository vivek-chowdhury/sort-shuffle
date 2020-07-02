/**
 * @description This function is responsible for sorting given array using Merge Sort algorithm.
 * @param {Array} list
 * @param {Function} defaultfn
 * @return Array
 */
function mergeSort(list, defaultfn = defaultComparion) {
  let len = list.length;
  if (len < 2) {
    return list;
  }
  let mid = Math.floor(len / 2);
  let left = list.splice(0, mid);
  return merge(mergeSort(left), mergeSort(list), defaultfn);
}

/**
 * @description This function is responsible for sorting items and merging
 * result at the end.
 *
 * @param {Array} left
 * @param {Array} right
 * @param {Function} compairFn
 * @return Array
 */
function merge(left, right, compairFn) {
  let len = left.length;
  let nList = [];
  while (left.length && right.length) {
    if (compairFn(left[0], right[0]) < 0) {
      nList.push(left.shift());
    } else {
      nList.push(right.shift());
    }
    len--;
  }
  return [...nList, ...left, ...right];
}

/**
 * @description This function is responsible for comparing both the element and
 * return -1 if first element is smaller than second one, else return 0.
 * @param {Object} a
 * @param {Object} b
 * @return Number
 */
function defaultComparion(a, b) {
  if (Number(a.innerHTML) < Number(b.innerHTML)) {
    return -1;
  } else {
    return 0;
  }
}

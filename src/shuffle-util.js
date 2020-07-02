/**
 * @description This function is responsible for shuffling given array.
 * @param {Array} list
 */
function shuffleList(list) {
  let len = list.length - 1;
  for (let a = len; a > 0; a--) {
    let rn = Math.floor(Math.random() * a);
    [list[a], list[rn]] = [list[rn], list[a]];
  }
}

/**
 * @description This function is responsible for removing all the child elements
 * of given container. It also return list of clone elements removed from the container.
 *
 * @param {Object} container
 * @param {Array} elements
 * @return Array
 */
function clearContainer(container, elements) {
  let nList = [];
  while (container.lastElementChild) {
    let child = container.lastElementChild;
    nList.push(child.cloneNode(true));
    container.removeChild(child);
  }
  return nList;
}

/**
 * @description This function is adds elements in given container.
 *
 * @param {Array} elements
 * @param {Object} container
 */
function appendElements(elements, container) {
  for (let a = 0; a < elements.length; a++) {
    container.appendChild(elements[a]);
  }
}

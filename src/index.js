let isShuffled = false;

/**
 * @description This function is responsible for initaiting sorting on Div(s)
 */
function sortElements() {
  if (isShuffled) {
    let container = document.getElementById("cubContainer");
    let childrens = container.children;
    childrens = clearContainer(container, childrens);
    let sortedList = mergeSort(childrens);
    appendElements(sortedList, container);
    isShuffled = false;
  } else {
    alert("List is already sorted, please click on shuffle button first !");
  }
}

/**
 * @description This function is responsible for initaiting shuffling on Div(s)
 */
function suffleElements() {
  let container = document.getElementById("cubContainer");
  let childrens = container.children;
  childrens = clearContainer(container, childrens);
  shuffleList(childrens);
  appendElements(childrens, container);
  isShuffled = true;
}

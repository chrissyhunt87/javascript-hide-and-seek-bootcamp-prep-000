function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget() {
  var target = document.getElementById('nested').getElementsByClassName('target')[0];
  return target;
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
var currentNode = document.getElementById('grand-node').querySelectorAll('*');

  while (currentNode.length > 1) {
        currentNode = currentNode[0].querySelectorAll('*');
  }

return currentNode[0];
}

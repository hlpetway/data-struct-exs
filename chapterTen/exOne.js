//Add a function to the BST class that counts the number of nodes in a BST.

function Node(data, left, right) {
  this.data = data;
  this.count =
  1;
  this.left = left;
  this.right = right;
  this.show = show;
  this.countNodes = countNodes;
}

function countNodes () {
  var counter = 0;
  function visitNodes (node) {
    if (node != null) {
      counter += 1;
      visitNodes(node.left);
      visitNodes(node.right);
    }
  }
  visitNodes(this.root);
  return counter;
}

// Add a min() function to the BST class that finds the minimum value in a BST.

function Node(data, left, right) {
  this.data = data;
  this.count =
  1;
  this.left = left;
  this.right = right;
  this.show = show;
  this.lowestNode = lowestNode;
}

function lowestNode(node) {
  if (node == null) {
    return null;
  }
  // node has no children
  if (node.left == null && node.right == null) {
    return node.data;
  }
  lowestNode(node.left);
}

//Add a function that goes from root to node.left and looks for the lowest number

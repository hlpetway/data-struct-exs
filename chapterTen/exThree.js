// Add a max() function to the BST class that finds the maximum value in a BST.

function Node(data, left, right) {
  this.data = data;
  this.count =
  1;
  this.left = left;
  this.right = right;
  this.show = show;
  this.highestNode = highestNode;
}

function highestNode(node) {
  if (node == null) {
    return null;
  }
  // node has no children
  if (node.left == null && node.right == null) {
    return node.data;
  }
  highestNode(node.right);
}

//Add a function that goes from root to node.right and looks for the highest number

// Add a function to the BST class that counts the number of edges in a BST.


function Node(data, left, right) {
  this.data = data;
  this.count =
  1;
  this.left = left;
  this.right = right;
  this.show = show;
  this.countEdges = countEdges;
}

function countEdges () {
  var counter = 0;
  var visitEdges (node) {
    if (node !=null) {
      if (node.left != null) {
      count += 1;
      visitEdges(node.left);
      }
      if (node.right != null) {
        count +=1;
        visitEdges(node.right);
      }
    }
  }
  visitEdges(this.root);
  return counter;
}

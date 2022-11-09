function Node(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  const tree = new Node(7);
  tree.right = new Node(9);
  tree.right.right = new Node(14);
  tree.right.left = new Node(null);
  tree.left = new Node(2);
  tree.left.left = new Node(1);
  tree.left.right = new Node(5);
  
  const The_sum = (tree, number)=>{
    const find =  (root, number, arr)=>{
      if (root == null) return false;
      if (arr.includes(number - root.value)) 
      return true; 
      arr.push(root.value);
      return find(root.left, number, arr) || find(root.right, number, arr); 
  };
    let container = [];
    return find(tree, number, container);
  };
    
  module.exports = {
      Node,
      The_sum
  }

const {Node,The_sum} = require("./challenge01")

describe('Sum', () => {

    test('Sum TEST', () => {
       const tree = new Node(10);
       tree.left = new Node(3);
       tree.left.right = new Node(6);
       tree.left.left = new Node(5);
       tree.right = new Node(9);
       tree.right.right = new Node(4);
       tree.right.left = new Node(2);
        
       const test1 = The_sum(tree,8)
       
     expect(test1).toBeTruthy()
  });
});
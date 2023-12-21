const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data) {
    // this.rot = new Node(data);
    this.rot = null;
  }

  root() {
   return this.rot;
  }

  add(data) {
    // let newNode = new Node(data);

    // const searchTree = node => {
    //   if (data < node.data) {
    //     if (!node.left) {
    //       node.left = newNode;
    //     } else {
    //       searchTree(node.left)
    //     }
    //   } else if (data > node.data) {
    //     if (!node.right) {
    //       node.right = newNode;
    //     } else {
    //       searchTree(node.right)
    //     }
    //   }
    // }

    // searchTree(this.root);

    this.rot = addWithin(this.rot, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.rot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
    }
  }

  find(data) {
    return findWithin(this.rot, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? findWithin(node.left, data) : findWithin(node.right, data);
    }
  }

  remove(data) {
    this.rot = removeNode(this.rot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;

      node.right = removeNode(node.right, minFromRight.data);

      return node;
    }
  }

  min() {
    if (!this.rot) {
      return;
    }

    // this.rot = new Node(data);
    let node = this.rot;
    while (node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    if (!this.rot) {
      return;
    }

    let node = this.rot;
    while (node.right) {
      node = node.right;
    }

    return node.data
  }
}

const tree = new BinarySearchTree();

module.exports = {
  BinarySearchTree
};
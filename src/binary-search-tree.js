const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  // helper method which creates a new node to
  // be inserted and calls insertNode
  add(data) {
    // Creating a node and initialising with data
    let newNode = new Node(data);

    // root is null then node will be added to the tree and made root.
    if (this._root === null) this._root = newNode;
    // find the correct position in the tree and add the node
    else this.insertNode(this._root, newNode);
  }

  // Method to insert a node in a tree. It moves over the tree to find the location to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recur until null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recur until null is found
      else this.insertNode(node.right, newNode);
    }
  }

  has(data) {
    return this._searchNode(this._root, data) !== null;
  }

  find(data) {
    return this._searchNode(this._root, data);
  }

  _searchNode(node, data) {
    // base case (we have't found anything)
    if (!node) {
      return null;
    }

    // if data matches the current node => we've found the node
    if (data === node.data) {
      return node;
    }
    // if not and data is smaller than the root => move left to check smaller values
    else if (data < node.data) {
      return this._searchNode(node.left, data);
    }
    // if not and data isn't smaller than the root => move right to check greater values
    else {
      return this._searchNode(node.right, data);
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    // base case => we haven't found the node
    if (!node) {
      return null;
    }

    if (data < node.data) {
      // if not and data is smaller => move to the left
      node.left = this._removeNode(node.left, data);
    } // if not and data is bigger => move to the right
    else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      // of one child
      if (!node.left) {
        // no left child => return right or null (if no right too)
        return node.right;
      } // no right child => return left
      else if (!node.right) {
        return node.left;
      }

      // if two children => compare
      // find min in the right => successor

      // replace current node with successor
      node.data = this._findMinValue(node.right);

      // recursion once again to remove successor
      node.right = this._removeNode(node.right, node.data);
    }

    return node;
  }

  _findMinValue(node) {
    let current = node;
    // move to the most left leaf (the smallest value)
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  _findMaxValue(node) {
    let current = node;
    // move to the most right leaf (the greatest value)
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  min() {
    // if empty
    if (!this._root) {
      return null;
    }

    return this._findMinValue(this._root);
  }

  max() {
    // if empty
    if (!this._root) {
      return null;
    }

    return this._findMaxValue(this._root);
  }
}

module.exports = {
  BinarySearchTree,
};

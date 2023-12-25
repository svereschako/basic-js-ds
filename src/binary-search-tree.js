const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here    
    return this._root;
  }

  add( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    var node = new Node(data);

    if (this._root==null) {
      this._root = node;
      return;
    }
    let currentChildren = this._root;
    this.findNodeToInsert(data, currentChildren);
    /*if (data < current.data && current.left) {
      current.left.add(data);
    } else if (data < current.data) {
      current.left = new Node(data);
    }

    if (data > current.data && current.right) {
      current.right.add(data);
    } else if (data > current.data) {
      current.right = new Node(data);
    }*/
    
  
  }

  findNodeToInsert(data, parentNode) {
    if (data > parentNode.data) {
        if (parentNode.right) {
            this.findNodeToInsert(data, parentNode.right);
            return;
        }
        parentNode.right = new Node(data);
    }
    else if (data <= parentNode.data) {
        if (parentNode.left) {
            this.findNodeToInsert(data, parentNode.left);
            return;
        }
        parentNode.left = new Node(data);
    }
  }

  has( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this._root) return false;
    let currentNode = this._root;
    return findNode(data, currentNode);
    function findNode(data, current){
    if (current?.data === data) {
      return true;
    }
    if(data > current?.data)
      return findNode(data, current?.right);
    else if(data < current?.data)
      return findNode(data, current?.left);
    else
      return false;
   }
  }

  find( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this._root) return null
    let currentNode = this._root;

    /*if (currentNode.data === data) {
      return currentNode;
    }*/
    return findNode(data, currentNode);

    /*if (data > currentNode?.data) {
        this.contains(data, currentNode?.right);
    } else if (data < currentNode?.data) {
        this.contains(data, currentNode?.left)
    } else {
        console.log("Node dosen't contain to this tree");
        return null;
    }*/
   function findNode(data, current){
    if (current?.data === data) {
      return current;
    }
    if(data > current?.data)
      return findNode(data, current?.right);
    else if(data < current?.data)
      return findNode(data, current?.left);
    else
      return null;
   }
  }

  remove( value ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here    
    this._root = removeNode(this._root, value);
    function removeNode(current, value) {
      if (value == null || value == undefined)
          return;

      if (value == current.data) {
          if (current.left == null && current.right == null) {
              return null;
          } else if (current.left == null)
              return current.right;
          else if (current.right == null)
              return current.left;
          else {
              var tempNode = kthSmallestNode(current.right);
              current.data = tempNode.data;
              current.right = removeNode(current.right, tempNode.data);
              return current;
          }


      } else if (value < current.data) {
          current.left = removeNode(current.left, value);
          return current;
      } else {
          current.right = removeNode(current.right, value);
          return current;
      }
    }

    function kthSmallestNode(node) {
        while (!(node.left == null))
            node = node.left;

        return node;
    }


  }
  
  
  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this._root)
      return null;
    let currentNode = this._root;
    return findNode(currentNode);

    function findNode(current) {
      if(!current.left)
        return current.data;
      return findNode(current.left);
    }

  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this._root)
      return null;
    let currentNode = this._root;
    return findNode(currentNode);

    function findNode(current) {
      if(!current.right)
        return current.data;
      return findNode(current.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};
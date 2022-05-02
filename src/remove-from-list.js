const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here  
  if(l.head.value == k){
  	const nodeToRemove = l.head;
    l.head = l.head.next;
    l.length -= 1;
  }
  let currentNode = l.head;
  let count = 0;
  let prevNode = null;
  while (count < l.length) {
  	prevNode = currentNode;
  	currentNode = currentNode.next;
  	if(currentNode == k){
  		prevNode.next = currentNode.next;
  		currentNode = currentNode.next.next;
  		count += 2;
  		l.length -= 1;
  	}else{    	
    	count += 1;    	
	}    
  }
}

module.exports = {
  removeKFromList
};

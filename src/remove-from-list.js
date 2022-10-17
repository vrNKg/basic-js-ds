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
 * 
 */
// function removeKFromList(l, k) {
//   if (l == null) return null;
//   let root = l;
//   while(root != null) {
//     if(root.value === k){
//       if(root.next != null) {
//         root.value = root.next.value;
//         root.next = root.next.next
//       } else {
//         root = null;
//       }
//     } else{
//       root = root.next;
//     };
//   }

//   return l;
// }

// function removeKFromList(l, k) {
    
//   let root = l;

//   while(root){
//     if(root.value === k){            
//       if(null===null){
//           root = root.next
//           continue
//       } else {
//           null.next = root.next
//           root = rootnext
//           continue
//       }
//     }
//     root = root.next
//   }
//   return l
//   }
function removeKFromList(l, k) {
    
  let root = l;
  let previous = null;

  while(root){
    if(root.value === k){            
      if(previous===null){
          root = l = root.next;
          continue
      } else {
          previous.next = root.next;
          root = root.next;
          continue
      }
    }
    previous = root;
    root = root.next;
  }
  return l;
}

module.exports = {
  removeKFromList
};
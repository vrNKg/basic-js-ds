const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head = null
  }

  root() {
    return this.head
  }

  add(data) {
    const node = new Node(data)
    if(this.head == null){
      this.head = node
    } else {
      let curr = this.head
      while(true){
        if(node.data > curr.data){
          if(curr.right == null) {
            curr.right = node
            break
          }
          else {
            curr = curr.right
            continue
          }
        }
        else {
          if(curr.left == null) {
            curr.left = node
            break
          }
          else {
            curr = curr.left
            continue
          }
        }
      }
    }
  }

  has(data) {
    let curr = this.head
    while(curr != null){
      if(data == curr.data){
        return true
      }
      curr = data > curr.data ? curr.right : curr.left
    }
    return false
  }    

  find(data) {
    let curr = this.head
    while(curr != null) {
      if(data == curr.data){
        return curr
      }
      console.log("CURR DATA" + curr.data)
      curr = data > curr.data ? curr.right : curr.left
    }
    return null
  }

  remove(data) {
    let curr = this.head
    while(curr != null){
      if(data == curr.data){
        return true
      }
      curr = data > curr.data ? curr.right : curr.left
    }
    return false
  }

  min() {
    let curr = this.head
    if(curr == null) return null;

    while(curr.left != null) {
      curr = curr.left
    }
    return curr.data
  }

  max() {
    let curr = this.head
    if(curr == null) return null;

    while(curr.right != null) {
      curr = curr.right
    }
    return curr.data
  }
}

module.exports = {
  BinarySearchTree
};
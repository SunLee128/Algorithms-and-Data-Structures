// Linked list
// A data structure that contains a head, tail and length property.Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

/* 
Lists 
Do not have indexes!
Connected via nodes with a next pointer
Random access is not allowed

Arrays
Indexed in order!
Insertion and deletion can be expensive
Can quickly be accessed at a specific index */

// piece of data - val
//reference to next node - next

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push (val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
// list.push("HELLO")
// list.push("GOODBYE")

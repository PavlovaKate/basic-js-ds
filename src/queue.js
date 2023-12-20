const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head =  null;
  }

  add(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      // this.head = new Node(value);
      // current.next = current;
      while(current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }
  }
}

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    let list = new LinkedList()

    while (this.storage[this.head]) {
     list.add(this.storage[this.head])
     this.head++
    }
     return list.head;
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    let remove = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return remove;
  }
}

const queue = new Queue();

module.exports = {
  Queue
};

/** @format */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Hub {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail = node;
      this.tail.next = node;

      this.length++;
      return this;
    }
  }

  remove() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.tail;
      let newTail = current;

      while (current.next) {
        this.tail = newTail;
        this.tail.next = null;
      }

      this.length--;
      return current;
    }
  }
}
console.clear();
let listeds = new Tail();
console.log(Tail.push(39));
console.log(Tail.push(34));

console.log(Tail.push(34));
console.log(Tail.push([6, 8, 9]));
console.log(Tail.push(79));
console.log(Tail.push({ name: "peter" }));
console.log(Tail.push(09));
console.log("");
console.log(Tail.length);
Tail.remove();
console.log("");
console.log(Tail.length);

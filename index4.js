/** @format */

class Index {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Git {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Index = new Index(val);
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
let Git = new Git();
console.log(Git.push(39));
console.log(Git.push(34));

console.log(Git.push(34));
console.log(Git.push([6, 8, 9]));
console.log(Git.push(79));
console.log(Git.push({ name: "peter" }));
console.log(Git.push(09));
console.log("");
console.log(Git.length);
Git.remove();
console.log("");
console.log(Git.length);

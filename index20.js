/** @format */

class Slice {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class current {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Slice = new Slice(val);
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
let current = new current();
console.log(current.push(39));
console.log(current.push(34));

console.log(current.push(34));
console.log(current.push([6, 8, 9]));
console.log(current.push(79));
console.log(current.push({ name: "peter" }));
console.log(current.push(09));
console.log("");
console.log(current.length);
current.remove();
console.log("");
console.log(current.length);

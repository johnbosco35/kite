/** @format */

class Format {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Lock {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Format = new Format(val);
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
let Lock = new Lock();
console.log(Lock.push(39));
console.log(Lock.push(34));

console.log(Lock.push(34));
console.log(Lock.push([6, 8, 9]));
console.log(Lock.push(79));
console.log(Lock.push({ name: "peter" }));
console.log(Lock.push(09));
console.log("");
console.log(Lock.length);
Lock.remove();
console.log("");
console.log(Lock.length);

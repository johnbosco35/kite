/** @format */

class Code {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Lab {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Code = new Code(val);
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
let Lab = new Lab();
console.log(Lab.push(39));
console.log(Lab.push(34));

console.log(Lab.push(34));
console.log(Lab.push([6, 8, 9]));
console.log(Lab.push(79));
console.log(Lab.push({ name: "peter" }));
console.log(Lab.push(09));
console.log("");
console.log(Lab.length);
Lab.remove();
console.log("");
console.log(Lab.length);

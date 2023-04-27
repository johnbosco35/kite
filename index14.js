/** @format */

class Press {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Pass {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Press = new Press(val);
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
let Pass = new Pass();
console.log(Pass.push(39));
console.log(Pass.push(34));

console.log(Pass.push(34));
console.log(Pass.push([6, 8, 9]));
console.log(Pass.push(79));
console.log(Pass.push({ name: "peter" }));
console.log(Pass.push(09));
console.log("");
console.log(Pass.length);
Pass.remove();
console.log("");
console.log(Pass.length);

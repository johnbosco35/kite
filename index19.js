/** @format */

class ForEach {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Every {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let ForEach = new ForEach(val);
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
let Every = new Every();
console.log(Every.push(39));
console.log(Every.push(34));

console.log(Every.push(34));
console.log(Every.push([6, 8, 9]));
console.log(Every.push(79));
console.log(Every.push({ name: "peter" }));
console.log(Every.push(09));
console.log("");
console.log(Every.length);
Every.remove();
console.log("");
console.log(Every.length);

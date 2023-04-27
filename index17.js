/** @format */

class Reduce {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Some {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Reduce = new Reduce(val);
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
let Some = new Some();
console.log(Some.push(39));
console.log(Some.push(34));

console.log(Some.push(34));
console.log(Some.push([6, 8, 9]));
console.log(Some.push(79));
console.log(Some.push({ name: "peter" }));
console.log(Some.push(09));
console.log("");
console.log(Some.length);
Some.remove();
console.log("");
console.log(Some.length);

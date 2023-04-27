/** @format */

class Push {
  constructor(val) {
    this.head = val;
    this.tail = null;
  }
}

class Listed {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Push = new Push(val);
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
let listed = new Listed();
console.log(Listed.push(39));
console.log(Listed.push(34));

console.log(Listed.push(97));
console.log(Listed.push([6, 8, 12]));
console.log(Listed.push(79));
console.log(Listed.push({ name: "johnbosco" }));
console.log(Listed.push(09));
console.log("");
console.log(Listed.length);
Listed.remove();
console.log("");
console.log(Listed.length);

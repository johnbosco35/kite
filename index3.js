/** @format */

class Best {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Fitness {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Best = new Best(val);
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
let Fitness = new Best();
console.log(Best.push(39));
console.log(Best.push(34));

console.log(Best.push(34));
console.log(Best.push([6, 8, 9]));
console.log(Best.push(79));
console.log(Best.push({ name: "peter" }));
console.log(Best.push(09));
console.log("");
console.log(Best.length);
Best.remove();
console.log("");
console.log(Best.length);

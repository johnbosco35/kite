/** @format */

class Sort {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Map {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Sort = new Sort(val);
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
let Map = new Map();
console.log(Map.push(39));
console.log(Map.push(34));

console.log(Map.push(34));
console.log(Map.push([6, 8, 9]));
console.log(Map.push(79));
console.log(Map.push({ name: "peter" }));
console.log(Map.push(09));
console.log("");
console.log(Map.length);
Map.remove();
console.log("");
console.log(Map.length);

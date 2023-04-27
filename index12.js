/** @format */

class Find {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Paint {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Find = new Find(val);
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
let Paint = new Paint();
console.log(Paint.push(39));
console.log(Paint.push(34));

console.log(Paint.push(34));
console.log(Paint.push([6, 8, 9]));
console.log(Paint.push(79));
console.log(Paint.push({ name: "peter" }));
console.log(Paint.push(09));
console.log("");
console.log(Paint.length);
Paint.remove();
console.log("");
console.log(Paint.length);

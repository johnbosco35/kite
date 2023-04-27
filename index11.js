/** @format */

class Length {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Short {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Length = new Length(val);
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
let Short = new Short();
console.log(Short.push(39));
console.log(Short.push(34));

console.log(Short.push(34));
console.log(Short.push([6, 8, 9]));
console.log(Short.push(79));
console.log(Short.push({ name: "peter" }));
console.log(Short.push(09));
console.log("");
console.log(Short.length);
Short.remove();
console.log("");
console.log(Short.length);

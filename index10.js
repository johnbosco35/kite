/** @format */

class Sun {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Shine {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Sun = new Sun(val);
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
let Shine = new Shine();
console.log(Shine.push(39));
console.log(Shine.push(34));

console.log(Shine.push(34));
console.log(Shine.push([6, 8, 9]));
console.log(Shine.push(79));
console.log(Shine.push({ name: "peter" }));
console.log(Shine.push(09));
console.log("");
console.log(Shine.length);
Shine.remove();
console.log("");
console.log(Shine.length);

/** @format */

class Wave {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Fin {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Wave = new Wave(val);
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
let Fins = new Fin();
console.log(Fin.push(39));
console.log(Fin.push(34));

console.log(Fin.push(34));
console.log(Fin.push([6, 8, 9]));
console.log(Fin.push(79));
console.log(Fin.push({ name: "peter" }));
console.log(Fin.push(09));
console.log("");
console.log(Fin.length);
Fin.remove();
console.log("");
console.log(Fin.length);

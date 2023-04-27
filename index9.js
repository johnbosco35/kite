/** @format */

class Pit {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Pitch {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Pit = new Pit(val);
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
let Pitch = new Pitch();
console.log(Pitch.push(39));
console.log(Pitch.push(34));

console.log(Pitch.push(34));
console.log(Pitch.push([6, 8, 9]));
console.log(Pitch.push(79));
console.log(Pitch.push({ name: "peter" }));
console.log(Pitch.push(09));
console.log("");
console.log(Pitch.length);
Pitch.remove();
console.log("");
console.log(Pitch.length);

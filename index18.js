/** @format */

class Pop {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Fill {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Pop = new Pop(val);
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
let Fill = new Fill();
console.log(Fill.push(39));
console.log(Fill.push(34));

console.log(Fill.push(34));
console.log(Fill.push([6, 8, 9]));
console.log(Fill.push(79));
console.log(Fill.push({ name: "peter" }));
console.log(Fill.push(09));
console.log("");
console.log(Fill.length);
Fill.remove();
console.log("");
console.log(Fill.length);

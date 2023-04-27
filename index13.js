/** @format */

class Name {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Define {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let Name = new Name(val);
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
let Define = new Define();
console.log(Define.push(39));
console.log(Define.push(34));

console.log(Define.push(34));
console.log(Define.push([6, 8, 9]));
console.log(Define.push(79));
console.log(Define.push({ name: "peter" }));
console.log(Define.push(09));
console.log("");
console.log(Define.length);
Define.remove();
console.log("");
console.log(Define.length);

'use strict';

/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-1-21
 **/

class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  push(element) {
    this.dataStore[this.top++] = element;
  }
  pop(element) {
    return this.dataStore[--this.top];
  }
  peek() {
    return this.dataStore[this.top - 1];
  }
  length() {
    return this.top;
  }
  clear() {
    this.top = 0;
  }
  toString() {
    return this.dataStore.join('');
  }
}

var s = new Stack();
s.push('StephenTian');
console.log(s.toString());
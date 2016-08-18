'use strict';
function Stack() {
  this.dataStore = [];
  this.top = 0;
}

// 压入栈方法
Stack.prototype.push = function(element){
  this.dataStore.push(element);
  this.top ++;
};

// 出栈方法
// 栈顶元素清除
// top-1
// 将栈顶元素返回给调用者
// --this.top先减，再输出
Stack.prototype.pop = function(){
  if (this.top == 0) {
    return undefined;
  }
  var lastItem = this.dataStore.pop();
  this.top --;
  return lastItem;
  // return this.dataStore[--this.top];
};

// 查看栈顶方法
Stack.prototype.peek = function(){
  return this.dataStore[this.top-1];
};

// 返回栈内元素数量
Stack.prototype.length = function(){
  return this.top;
};

// 清空栈
Stack.prototype.clear = function(){
  return this.top = 0;
};

Stack.prototype.toString = function(){
  if (this.top == 0) {
    return "已经被掏空了";
  }
  return this.dataStore.join("|");
};

'use strict';

/*
******author:StephenTian
******2016.8.19;
******栈的实现;
*/

function Stack() {
  this.dataStore = [];
  this.top = 0;
}

// 压入栈方法
Stack.prototype.push = function(element){
  // this.dataStore.push(element);
  // this.top ++;
  this.dataStore[this.top++] = element;
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

//进制数转换
//n为数字
//b为几进制数
//函数最后返回计算的结果
// function mulBase(n,b){
//   var stack = new Stack();
//   do {
//     stack.push(n%b);
//     n = Math.floor(n/b);
//   } while (n > 0);
//   var converted = '';
//   do {
//     converted += stack.pop();
//   } while (stack.top > 0);
//   return converted;
// };
// console.log(mulBase(32,16));

//回文
function isPalindrome(word){
  var w = new Stack();
  for (var i = 0; i < word.length; i++) {
    w.push(word[i]);
  }
  var repeat = '';
  while (w.length() > 0) {
    repeat += w.pop();
  }
  if (word == repeat) {
    return "是回文";
  }else {
    return "不是回文";
  }
}
console.log(isPalindrome('dad'));
console.log(isPalindrome('racecar'));

//递归
function recursion(n){
  if (n === 0) {
    return 1;
  }else {
    return n*recursion(n-1);
  }
}

//累乘
function factorial(n){
  var s = new Stack();
  do {
    s.push(n);
    n--;
  } while (n > 0);
  console.log(s.toString());
  var result = 1;
  var num = 1;
  do {
    num *= s.pop();
  } while (s.top > 0);
  return num;
}
console.log(factorial(6));

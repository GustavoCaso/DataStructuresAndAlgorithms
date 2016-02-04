// STACK

function Stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;

  function push(elem){
    this.dataStore[this.top++] = elem;
  }

  function peek(){
    return this.dataStore[this.top-1];
  }

  function pop(){
    return this.dataStore[--this.top];
  }

  function clear(){
    this.top = 0;
  }

  function length(){
    return this.top;
  }
}

// USING STACK TO CREATE ALGORITH TO CONVERT TO BASE(2-9)

function mulBase(num, base) {
  var s = new Stack();
  do{
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);
  var converted = "";
  while (s.length() > 0){
    converted += s.pop();
  }
  return converted;
}

// var num = 32;
// var base = 2;
// var newNum = mulBase(num, base);
// console.log(num + " converted to base " + base + " is " + newNum);

function isPalindrome(word){
  var s = new Stack();
  for(var i = 0; i < word.length; i++){
    s.push(word[i]);
  }

  var rword = "";
  while(s.length() >0){
    rword += s.pop();
  }
  if (word == rword){
    return true;
  }else{
    return false;
  }
}

function isBalanceExpression(expression){
  var s = new Stack();
  var startParenthesis = 0;
  var arr = expression.split(' ');
  debugger;
  for(var i = 0; i < arr.length; i++){
    elem = arr[i];
    if(elem == '('){
      startParenthesis = i;
      s.push([elem, i])
    }else{
      s.push([elem, i])
    }
  }
  while(s.length() > 0){
    next = s.pop()
    if(next[1] == startParenthesis + 4){
      if(next[0] != ')'){ return 'There is some parenthesis missing at ' + next[1]; }
    }
  }
  return 'The expression has the correct parenthesis';
}

console.log(isBalanceExpression("2.3 + 23 / 12 + ( 3.14159 * .24  + 67"));

function infixToPostFix(expression){
  var precende = {
    '(': 1,
    '-': 2,
    '+': 2,
    '*': 3,
    '/': 4
  }
  var operators = new Stack();
  var result = [];
  var arr = expression.split(' ');
  for(var i = 0; i < arr.length; i++){
    elem = arr[i];
    if((/\d/g).test(elem)){
      result.push(elem);
    }else if(elem == '('){
      operators.push(elem);
    }else if(elem == ')'){
      while(operators.length() > 0){
        var next = operators.pop();
        if (next == '(') { break; }
        result.push(next);
      }
    }else{
      if(operators.length() > 0){
        if(precende[operators.peek()] > precende[elem]){
          result.push(operators.pop());
        }else{
          operators.push(elem);
        }
      }else{
        operators.push(elem);
      }
    }
  }
  while(operators.length() > 0){
    result.push(operators.pop());
  }
  return result.join(' ');
}

function doMath(num1, num2, operation){
  var string = num1 + ' ' + operation + ' ' + num2;
  return eval(string);
}

function evaluatePostFix(expression){
  var arr = expression.split(' ');
  var operators = new Stack();
  for(var i = 0; i < arr.length; i++){
    elem = arr[i];
    if((/\d/g).test(elem)){
      operators.push(elem);
    }else{
      operators.push(doMath(operators.pop(), operators.pop(), elem));
    }
  }
  return operators.pop();
}

console.log(evaluatePostFix(infixToPostFix('( 5 + 6 ) * 9')));

function Dequee(){
  this.dataStore = [];
  this.size = size;
  this.insertFront = insertFront;
  this.insertBack = insertBack;
  this.removeFront = removeFront;
  this.removeBack = removeBack;
  this.empty = empty;

  function size(){
    return this.dataStore.length;
  }

  function insertFront(elem){
    this.dataStore.unshift(elem);
  }

  function insertBack(elem){
    this.dataStore.push(elem);
  }

  function removeFront(){
    return this.dataStore.shift();
  }

  function removeBack(){
    return this.dataStore.pop();
  }

  function empty(){
    return this.dataStore.length === 0;
  }
}

function isPalindrome(word){
  var d = new Dequee();
  var arrWord = word.split('');
  for(var i = 0; i < arrWord.length; i++){
    d.insertBack(arrWord[i])
  }
  var palindrome = true;
  while(d.size() > 1){
    if(d.removeFront() != d.removeBack()){
      palindrome =  false;
      break;
    }else{
      continue;
    }
  }
  return palindrome;
}

console.log(isPalindrome('radar'));
console.log(isPalindrome('palma'));
console.log(isPalindrome('otto'));
console.log(isPalindrome('moom'));

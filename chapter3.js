function List(){
  this.dataStore = [];
  this.pos = 0;
  this.listSize = 0;
  this.find = find;
  this.append = append;
  this.front = front;
  this.end = end;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.getElement = getElement;
  this.addIfBigger = addIfBigger;
  this.addIfSmaller = addIfSmaller;
  this.someBigger = someBigger;
  this.someSmaller = someSmaller;

  function find(element){
    for(var i = 0; i < this.listSize; ++i){
      if(this.dataStore[i] == element){
        return i;
      }
    }
    return -1;
  }

  function length(){
    return this.listSize;
  }

  function append(element){
    this.dataStore[this.listSize++] = element
  }

  function front(){
    this.pos = 0;
  }

  function end(){
    this.pos = this.listSize-1;
  }

  function next(){
    if (this.pos <= this.listSize-1){
      this.pos++;
    }
  }

  function currPos(){
    return this.pos;
  }

  function getElement(){
    return this.dataStore[this.pos]
  }

  function someBigger(elem){
    for(this.front(); this.currPos() < this.length(); this.next()){
      var currentElement = this.getElement();
      if(elem instanceof String){
        if(elem.length > currentElement.length){
          return true;
        }
      }else{
        if(elem > currentElement ){
          return true;
        }
      }
    }
      return false;
  }


  function someSmaller(elem){
    for(this.front(); this.currPos() < this.length(); this.next()){
      if(elem instanceof String){
        if(elem.length < this.getElement().length){
          return true;
        }
      }else{
        if(elem < this.getElement()){
          return true;
        }
      }
    }
      return false;
  }

  function addIfBigger(element){
    if(this.someBigger(element)){
      this.append(element);
    }
  }

  function addIfSmaller(element){
    if(this.someSmaller(element)){
      this.append(element);
    }
  }
}

// PERSONS EXERCISE

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function displayPeople(list, gender){
  for(list.front(); list.currPos() < list.length(); list.next()){
    if(list.getElement()['gender'] == gender){
      console.log(list.getElement()['name']);
    }
  }
}



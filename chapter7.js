function Dictionary() {
  this.datastore = new Array;
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;

  function add(key, value){
    this.datastore[key] = value;
  }

  function find(key){
    return this.datastore[key];
  }

  function remove(key){
    delete this.datastore[key];
  }

  function showAll(){
    Object.keys(this.datastore).sort().forEach(function(key){
      console.log(key + " -> " + this.datastore[key]);
    }, this);
  }

  function count(){
    return Object.keys(this.datastore).length;
  }

  function clear(){
    Object.keys(this.datastore).forEach(function(key){
      delete this.datastore[key];
    }, this);
  }
}


var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
//pbook.remove("David");
pbook.showAll();
console.log(pbook.count());

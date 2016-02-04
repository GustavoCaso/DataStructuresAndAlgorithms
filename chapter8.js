function HashTable(){
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
  this.buildChains = buildChains;

  function simpleHash(data){
    const H = 37;
    var total = 0;
    for(var i = 0; i < data.length; ++i){
      total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0){
      total += this.table.length -1;
    }
    return parseInt(total);
  }

  function put(data){
    var pos = this.simpleHash(data);
    var index = 0;
    if (this.table[pos][index] == undefined){
      this.table[pos][index] = data;
    }else{
      ++index;
      while(this.table[pos][index] != undefined){
        ++index;
      }
      this.table[pos][index] = data;
    }
  }

  function get(key) {
    var index = 0;
    var pos = this.simpleHash(key);
    if (this.table[pos][index] = key) {
      return this.table[pos][index+1];
    }else {
      index += 2;
      while (this.table[pos][index] != key) {
        index += 2;
      }
      return this.table[pos][index+1];
    }
    return undefined;
  }


  function buildChains(){
    for(var i = 0; i < this.table.length; ++i){
      this.table[i] = new Array();
    }
  }

  function showDistro(){
    var n = 0;
    var result = '';
    for(var i = 0; i < this.table.length; ++i){
      outSidePosition = this.table[i];
      if (outSidePosition.length > 0){
        result += i +": "
        for(var j = 0; j < outSidePosition.length; ++j){
          result += j + " => " + outSidePosition[j] +" "
        }
        result += "\n"
      }
    }
    console.log(result);
  }
}


var someNames = ["David", "Jennifer", "Donnie", "Raymond",
                 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
hTable.buildChains();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();

// We have tested the hashing collition with separte chaining
// There is another technique called linear probing, by looking for next available slot

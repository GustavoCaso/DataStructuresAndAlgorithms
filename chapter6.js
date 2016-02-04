function Node(element){
  this.element = element;
  this.next = null;
}

function LList(){
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrevious = findPrevious;
  this.display = display;
  this.advance = advance;
  this.show = show;

  function find(item){
    var currNode = this.head;
    while(currNode.element != item){
      currNode = currNode.next;
    }
    return currNode;
  }

  function insert(newElement, item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  function findPrevious(item){
    var currNode = this.head;
    while(currNode.next.element !== item && currNode.next !== null){
      currNode = currNode.next;
    }
    return currNode;
  }

  function remove(item){
    var prevNode = this.findPrevious(item);
    if((prevNode.next !== null)){
      prevNode.next = prevNode.next.next;
    }
  }

  function display(){
    var currNode = this.head;
    while((currNode.next !== null)){
      this.show(currNode);
      currNode = currNode.next;
    }
  }

  function advance(n){
    var currNode = this.head;
    for(var i = 0; i<n; i++){
      currNode = currNode.next;
    }
    return currNode;
  }

  function show(node){
    console.log(node.next.element);
  }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.insert("Madrid", "Alma");
cities.display();
console.log();
console.log('Removing Russellville');
console.log();
cities.remove("Russellville");
cities.display();

// We have to test a few more examples by creating a double linked list
// and a circular linked list

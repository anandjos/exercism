class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  push(value) {
    let node = new Node(value);
    if(this.head == null)
      this.head = node;
    else
    {
      let curr = this.head;
      while(curr.next != null)
        curr = curr.next;
      curr.next = node;
      node.prev = curr;
    }
    this.size++;
  }

  pop() {
    let curr = this.head;
    while(curr.next != null)
      curr = curr.next;
    if(curr == this.head)
      this.head = null;
    else
      curr.prev.next = null;
    this.size--;
    return curr.value;
  }

  shift() {
    let curr = this.head;
    if(curr.next == null)
      this.head = null;
    else
    {
      this.head = curr.next;
      curr.next.prev = null;
    }
    this.size--;
    return curr.value;

  }

  unshift(value) {
    let node = new Node(value);
    if(this.head == null)
      this.head = node;
    else
    {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  delete(value) {
    let curr = this.head;
    while(curr.value != value && curr.next != null)
      curr = curr.next;
    if(curr.value != value)
      return;
    if(curr == this.head)
    {
      this.head = curr.next;
      if(this.head != null)
        this.head.prev = null;
    }
    else
    {
      curr.prev.next = curr.next;
      if(curr.next != null)
        curr.next.prev = curr.prev;
    }
    this.size--;
    return curr.value;
  }

  count() {
    return this.size;
  }
}

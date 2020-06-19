let callback_arr = [];
let input = {};
let val;
let fun;
let o =0;
let callback = false;
export class InputCell {
  constructor(value) {
    this.value = value;
    this.change = 0;
  }
  setValue(value) {
    if(this.value!=value){
      this.change = 1;
      this.value = value;
      if(o == 1)
        if(fun(input) != val)
        {
//          val = fun(input);
          if(callback)
            callback_arr.push(fun(input));
        }
    }
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    o =1;
    fun = fn;
    input = inputCells;
    this.val = fn(inputCells);
    val = this.val;
  }
  get value(){
    return fun(input);
  }

  addCallback(cb) {
    callback = true;
    return callback_arr;
  }

  removeCallback(cb) {
  }
}

export class CallbackCell {
  constructor(fn) {
    this.val = [];
  }
  get values(){
    return callback_arr;
  }
}

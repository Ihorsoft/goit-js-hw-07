class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;

  }
  getValue() {
    return this.#value;
  }
 
padEnd(str) {
  this.#value += str;
}

padStart(str) {
  this.#value = str + this.#value;
}

padBoth(str) {
  this.#value = str + this.#value + str;
}


}




const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");           //      перевірка методу padStart() ініціалідація 
console.log(builder.getValue()); // "^." перевірка методу padStart() візуалізація
builder.padEnd("^");             //       перевірка методу padEnd() ініціалізація 
console.log(builder.getValue()); // "^.^" перевірка методу padEnd() візуалізація
builder.padBoth("=");            //        перевірка методу padBoth() ініціалізація
console.log(builder.getValue()); // "=^.^=" перевірка методу padBoth() візуалізація
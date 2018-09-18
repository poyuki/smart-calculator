class SmartCalculator {
  constructor(initialValue) {
    this.initalVal=initialValue;
    this.evalString=`${initialValue}`;
  }

  add(number) {
      this.evalString+=`+${number}`;

      return this;
  }
  
  subtract(number) {
      this.evalString+=`-${number}`;

      return this;
  }

  multiply(number) {
      this.evalString+=`*${number}`;

      return this;
  }

  devide(number) {
      this.evalString+=`/${number}`;

      return this;
  }

  pow(number) {
      this.evalString+=`**${number}`;

      return this;
  }

  toString(){
      return eval(this.evalString);
  }
}

module.exports = SmartCalculator;

const customMap = (array, callback) => {
  let outputArray = [];
  for(let i = 0; i < array.length; i++) {
    outputArray.push(callback(array[i]));
  }
  return outputArray;
}

const customReduce = (array, callback, initialValue = false) => {
  if(!array.length) {
    if(!initialValue) throw new TypeError;
    return initialValue;
  }
  if(array.length === 1) {
    return initialValue ? customReduce([...array, initialValue], callback) : array[0];
  }
  let accumulator = initialValue ? initialValue : array[0];
  let currentValue = initialValue ? array[0] : array[1];
  let i = initialValue ? 0 : 1;
  for(; i < array.length; i++) {
    accumulator = callback(accumulator, currentValue)
    if(i === array.length - 1) break;
    currentValue = array[i + 1];
  }

  return accumulator;
}

const skip = (array, n) => {
  let outputArray = [];
  for(let i = 0; i < array.length; i++) {
    if(i === n - 1) continue;
    outputArray = [...outputArray, array[i]];
  }
  return outputArray;
}

const take = (array, n) => {
  let outputArray = [];
  for(let i = 0; i < n; i++) {
    outputArray = [...outputArray, array[i]];
  }
  return outputArray;
}

const customFilter = (array, callback) => {
  let outputArray = [];
  for(let i = 0; i < array.length; i++) {
    if(!callback(array[i])) continue;
    outputArray = [...outputArray, array[i]];
  }

  return outputArray;
}

const chain = (array) => {
  return {
    initialArray: [...array],
    take(n) {
      this.initialArray = take(this.initialArray, n);
      return this;
    },
    skip(n) {
      this.initialArray = skip(this.initialArray, n);
      return this;
    },
    value() {
      return this.initialArray;
    }
  }
}

const customForeach = (array, callback) => {
  let copyArray = [...array];
  for(let i = 0; i < copyArray.length; i++) {
    callback(copyArray[i])
  }
}

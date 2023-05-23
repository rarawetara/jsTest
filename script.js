function createSum(initialValue) {
  let sum = initialValue;

  function inner(num) {
    sum += num;
    return sum;
  }

  return inner;
}

const sum = createSum(0);

console.log(sum(3)); 
console.log(sum(5)); 
console.log(sum(20));
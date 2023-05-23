function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree > 0) {
    return num * pow(num, degree - 1);
  } else {
    return 1 / pow(num, -degree);
  }
}
let result = pow(2, 3); 
console.log(result);
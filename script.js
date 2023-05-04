
const operator = prompt('Enter operator ( operator +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
  case '+':
  result = number1 + number2;
  console.log(`${number1} + ${number2} = ${result}`);
  break;''

  case '-':
  result = number1 - number2;
  console.log(`${number1} - ${number2} = ${result}`);
  break;

  case '*':
  result = number1 * number2;
  console.log(`${number1} * ${number2} = ${result}`);
  break;

  case '/':
  result = number1 / number2;
  console.log(`${number1} / ${number2} = ${result}`);
  break;

  default:
  console.log('error');
  break;
   }
  /////////////////////////////////////////////////
  let a = +prompt("першеЧисло");
  let b = +prompt("другеЧисло");
  let с = +prompt("третеЧисло");
  alert( (a + b +с) /3);
  
  

  
function Add(a, b){
    return a + b;
  }
  
  function Sub(a, b){
    return a - b;
  }
  
  function Mul(a, b){
    return a * b;
  }
  
  function Div(a, b){
    if(b == 0){
     return 'Error';
    } else{
       return a / b;
    }
  }
  
  var a = (prompt('firstNumber'));
  var b = (prompt('SecondNumber'));
  document.write('Sub: ' + Sub(a, b) + '<br>');
  document.write('Add: ' + Add(a, b) + '<br>');
  document.write('Mul: ' + Mul(a, b) + '<br>');
  document.write('Div: ' + Div(a, b) + '<br>');

  /////////////////////////////////////////////////
  let a = +prompt("перше число");
  let b = +prompt("друге число");
  let с = +prompt("трете число");
  alert( (a + b +с) /3);
  
  

const array =[];
let element ;
do{
  element = prompt('add element');
if (element)
array.push(element);
}
while(element)
console.log(array);
function compareNumeric(a, b) {  
  if (a > b) return 1; 
  if (a == b) return 0; 
  if (a < b) return -1;
}



function compareNumeric(a, b) {  
  return a - b;
}

array.sort(compareNumeric);

alert(array);  

array.splice(1, 1); 
alert(array);

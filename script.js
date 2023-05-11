
//#1//
for (let i = 20; i <= 30; i+=0.5){
  console.log(i)
  }

//#2//
const table = {};
for (let i = 20; i <= 100; i+=10){
  for (let j = 27; j <= 27; j++){
    if(!table[i]) {
      table[i] = [];
    }
    table[i].push(i*j);
  }
}

//#3//
let n = 500;
let str = "";
for (let i = 1; i <= 100; i++) {
  sqrNum = i ** 2;
  if (sqrNum >= n) break;
  str += ${i} => ${sqrNum}; ;
}
console.log(str);
//#4//
let n = 10;
next:
for (let i = 1; i <= n; i++) {  
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue next;
  }

  console.log( i ); 
}
//#5//

let number = parseInt(prompt("whrite number: "));
if (number % 3 === 0 && number ) {
alert("you can");
 }   else {
   alert("you cant");
}
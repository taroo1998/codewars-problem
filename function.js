function testEven(n) {
  if(n%2 ===0){
    return true;
  }
  else{
     return false;
  }
  
    //Your awesome code here!
}
console.log(testEven(5));

function maps(x){
  let result=[];
  for (let i = 0; i < x.length; i += 1){
    result.push(x[i]+ x[i]);
  }
return result;
}
console.log(maps([1, 2, 3]));

function helloFunction(name) {
  return `Hello, ${name}`
}
console.log(helloFunction("Mr. Dorji"))

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    let yearlyInterest = principal * interest;
    let taxPaid = yearlyInterest * tax;
    principal += yearlyInterest - taxPaid;
    years++;
  }
  return years;
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));

var humanYearsCatYearsDogYears = function(humanYears) {
 let dogYears=0;
 let catYears=0;
  
  if(humanYears === 1){
    dogYears=15;
    catYears=15;
    
  }else if (humanYears === 2){
    dogYears=24;
    catYears=24;
  }else{
    dogYears = 24 + (humanYears -2)*5;
    catYears = 24 + (humanYears - 2)*4;
  }
    
  return [humanYears, catYears, dogYears];
}
console.log(humanYearsCatYearsDogYears(1));


function basicOp(operation, value1, value2){
  let result = 0;
  if(operation === "+"){
     result = value1 + value2;
     }
  if(operation === "-"){
     result = value1 - value2;
     }
  if(operation === "*"){
     result = value1 * value2;
     }
  if(operation === "/"){
     result = value1 / value2;
     }
  return result;
}
console.log(basicOp("+", 4, 7))
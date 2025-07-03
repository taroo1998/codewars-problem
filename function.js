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

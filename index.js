function calculateYears(principal, interest, tax, desired) {
let year = 0;
let yearlyInterest = principal * interest;
let taxPaid = yearlyInterest * tax;
principal += yearlyInterest - taxPaid;
if(principal < desired){
    return year ++;
}
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));


class Ghost {
  constructor() {
    const colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}
let ghost = new Ghost();
console.log(ghost.color); 

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
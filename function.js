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

var countSheep = function (num){
  if(!num) return ''
let sheep="";
  for(let i = 1; i <= num; i +=1){
    sheep += i + ' sheep...'
    }
  return sheep;
}
console.log(countSheep(4));

function DNAtoRNA(dna) {
  let result = "";
  for (let i=0; i<dna.length; i++){
    if(dna[i]==="T"){
      result += "U";
  }else{
    result += dna[i];
  }
}
  return result;
  // create a function which returns an RNA sequence from the given DNA sequence
}
console.log(DNAtoRNA("GACCGCCGCC"));
console.log(DNAtoRNA("GCAT"))

function twoHighest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique.slice(0, 2);

}
console.log(twoHighest([50,45,50,40,55]))

function findDifference(a, b) {
  const cubiod1 = a[0]*a[1]*a[2];
  const cubiod2 = b[0]*b[1]*b[2];
  let result = Math.abs(cubiod1 -cubiod2);
  return result;
  //loading...
}
console.log(findDifference([2,3,4],[4,5,6]))

const quarterOf = (month) => {
  let quater = month/3;
  return Math.ceil(quater);
}
console.log(quarterOf(3));


function past(h, m, s){
  return (h * 3600 + m * 60 + s) * 1000;
}
console.log(past(0,1,1));


function positiveSum(arr) {
  let result= 0;
  for (let i=0; i<arr.length; i++){
    if(arr[i]>0) result += arr[i];
  }
  return result;
}
console.log(positiveSum([1,-2,3,4,5,6]))

function removeChar(str){
    return str.slice(1,str.length-1);
};
console.log(removeChar('eloquent'))
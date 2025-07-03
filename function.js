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
console.log(sayHello("Mr. Dorji"))


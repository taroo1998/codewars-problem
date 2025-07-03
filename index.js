
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
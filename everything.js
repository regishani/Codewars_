// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

function every(array, test) {
  for(let element in array){
      if(!test(element)){
          return false
      }else{
          return true
      }
  }
}
function every2(array, test){
    return every.some(element=>!test(element))
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
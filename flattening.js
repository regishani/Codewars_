let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat,current) =>flat.concat(current), []))

// Your code here.
// → [1, 2, 3, 4, 5, 6]
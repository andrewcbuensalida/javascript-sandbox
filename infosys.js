const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];

for (let n of array1) {
  console.log(n ** 3);
  console.log(array1.indexOf(n));
}

let sum = 0
for(let i = 0; i < array1.length; i++){
  const cube = Math.pow(array1[i],3) 
  console.log(cube)
  sum+=cube
}

console.log(sum)
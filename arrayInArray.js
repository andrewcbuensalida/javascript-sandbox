const x = [[1,2],[3,4]]
// const y = x.map(innerArray => [...innerArray]);
const y = JSON.parse(JSON.stringify(x));
// const y = structuredClone(x);
y[0][0] = 100


console.log(x);
console.log(y);

const z = [].map(_=>'Hello')
z[3] = 1000
console.log(z)
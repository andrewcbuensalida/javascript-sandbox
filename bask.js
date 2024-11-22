// Question 1
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
// 	console.log("3");
// });

// console.log("4");


// Question 2
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("one");
  }, 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("two");
  }, 200);
});

Promise.all([p1, p2]).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
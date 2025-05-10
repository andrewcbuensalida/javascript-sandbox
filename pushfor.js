const array1 = [1, 2, 3];
let counter = 0;


for(let i = 0; i < array1.length; i++) {
    const num = array1[i];
    console.log(num);
    console.log(array1)
    array1.push(counter);
    counter++;
    if (counter === 20) {
        break;
    }
}
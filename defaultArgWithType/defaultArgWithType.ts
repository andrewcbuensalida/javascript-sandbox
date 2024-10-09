
function defaultArgWithType(a: number, b: number = 10): number {
    return a + b;
}

console.log(defaultArgWithType(5, 6)); // 11
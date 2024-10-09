function defaultArgWithType(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
console.log(defaultArgWithType(5, 6)); // 11

function add(a, b) {
    return a + b;
}

console.log(add(2, 4))

function multiply(a, b) {
    let product = 0
    for (let counter = 0; counter < b; counter++) {
        product = add(product, a)

    }
    return product
}
console.log(multiply(6, 8))

function power(x, n) {
    let product = 0
    for (let counter = 1; counter <= n; counter++) {
        product = multiply(counter, x)
    }
    return (multiply(product, product))
}
console.log(power(2, 8))

function factorial(n) {
    let product = 1
    for (let counter = 1; counter <= n; counter++) {

        product = multiply(product, counter)

    }
    return product
}
console.log(factorial(4))

function fibonacci(n) {
    let counter1 = 0
    let counter2 = 1
    let product = 1
    for (let counter = 3; counter <= n; counter++) {
        product = add(counter1, counter2);
        counter1 = counter2;
        counter2 = product

    }

    return product


}
console.log(fibonacci(8))
let fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,];

function Fibonacci(num) {
    for (i = 2; i <= num; i++) {

        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);

    }
}

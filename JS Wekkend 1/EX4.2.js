let fib = [0, 1, 1, 2, 4, 7, 13, 24, 44, 81];

function Fibonacci(num) {
    for (i =0; i <= num; i++) {
        console.log(fib[i]);
        fib[i] = fib[i] +  fib[i + 2] + fib[i + 1];
        

    }
}
Fibonacci(7);
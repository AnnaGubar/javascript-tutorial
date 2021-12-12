//* Подсчитать факториал методом рекурсии

const factorial = function (n) {
  if (n === 1) {
    return n;
  }

  console.log(`n before: ${n}`);
  const res = n * factorial(n - 1);
  console.log(`n after: ${n}`);

  return res;
};

console.log(factorial(5)); // 5! = 1*2*3*4*5 = 120

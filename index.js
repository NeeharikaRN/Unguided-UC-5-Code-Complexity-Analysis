function calculate(a, b, c) {
  if (a > 0 && b > 0) {
    if (c > 0) {
      return a + b + c;
    } else {
      if (a > b) {
        return a - c;
      } else {
        return b - c;
      }
    }
  } else {
    return 0;
  }
}

console.log(calculate(1, 2, 3));

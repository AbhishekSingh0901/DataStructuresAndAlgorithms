function digitmul(num) {
  if (num < 1) {
    return 1;
  }
  let mul = num % 10;
  num = Math.floor(num / 10);
  mul = mul * digitmul(num);
  return mul;
}

console.log(digitmul(1234));

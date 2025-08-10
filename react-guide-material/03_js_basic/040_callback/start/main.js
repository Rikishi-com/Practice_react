function print(callback) {
  const result = callback(1);
  console.log(callback(2));
  return result;
}

const fn = (num) => num * 2;
print(fn);
  
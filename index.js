const fn = () => {
  const a = 1;
  const b = 2;
  return { a, b };
};
const { a, b } = fn();
console.log(a, b);

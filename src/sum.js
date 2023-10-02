const sum = (...args) => {
  // console.log(args, 'ddd')
  // return a + b;

  const total = args.reduce((a, b) => a + b);
  return total
}

export {
  sum
}
function doUnion(a, b) {
  const set = new Set([...a, ...b]);
  return set.size;
}

console.log(doUnion([1, 2, 3, 4, 5], [1, 2, 3]));

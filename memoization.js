/**
 *  Memoization = caching
 *  - Memoization is CACHING the RETURN VALUE of a FUNCTION based on its PARAMETERS
 *  - uses an object (or other data structure with O(1) lookup)
 *  - to avoid reevaluating whole function if it has already been run
 *  - with the same value previously
 */

function addTo50(n) {
  console.log("Suppose this function takes a long time");
  return n + 50;
}

let cache = {};
function memoizedAddTo50(n) {
  if (cache[n]) {
    return cache[n]; // return memoized return value
  } else {
    console.log("Suppose this function takes a long time");
    cache[n] = n + 50; // memoize return value
    return cache[n];
  }
}

console.log("1:", memoizedAddTo50(5));
// Suppose this function takes a long time
// 1: 55
console.log("2:", memoizedAddTo50(5)); // does not run the whole fn
// 2: 55

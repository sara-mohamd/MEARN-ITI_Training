const array = [10, 20, 30];

console.log('Using for...in:');
for (const index in array) {
  console.log(index, array[index]);
}

/**
 * loop iterates over the enumerable properties of an object
 * . When used with arrays, it iterates over the array indices (keys).
 */

console.log('Using for...of:');
for (const value of array) {
  console.log(value);
}
/**
 * loop iterates over the values of an iterable object, such as an array, string, or Set.
 */

console.log('Using .forEach():');
array.forEach((value, index) => {
  console.log(index, value);
});

/**
 * Executes a function for each array element.
 * Provides value, index, and array to the callback function.
 */
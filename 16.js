/* Convert array → JSON string */

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const jsonstring = JSON.stringify(numbers, null, 4);

console.log(`ARRAY: ${numbers}`);
console.log(`JSON STRING: ${jsonstring}`);
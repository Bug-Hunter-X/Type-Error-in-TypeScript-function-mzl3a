function combine<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedNumbers = combine(arr1, arr2);
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]

const arr3 = ['a', 'b', 'c'];
const arr4 = ['d', 'e', 'f'];

const combinedStrings = combine(arr3, arr4);
console.log(combinedStrings); // Output: ['a', 'b', 'c', 'd', 'e', 'f']
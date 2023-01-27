const arr1 = [3, 1, 7, 9];
const arr2 = [2, 4, 1, 9, 3];

function getDifference(arr1, arr2) {
  return arr1.filter((element) => {
    return !arr2.includes(element);
  });
}
const difference = [...getDifference(arr1, arr2),...getDifference(arr2, arr1)];
function sumArray(difference) {
  let sum = 0;
  for (let i = 0; i < difference.length; i += 1) {
    sum += difference[i];
  }
  console.log(sum);
  return sum;
}
console.log(difference);
sumArray(difference);

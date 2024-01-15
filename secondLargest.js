function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const array = [10,6,3,56,7,8];
const secondLargest = findSecondLargest(array);


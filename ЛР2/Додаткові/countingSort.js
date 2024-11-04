function countingSort(arr) {
  if (arr.length === 0) return arr;

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const count = Array(max - min + 1).fill(0);

  for (let num of arr) {
    count[num - min]++;
  }

  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index] = i + min;
      index++;
      count[i]--;
    }
  }

  return arr;
}

function countingSortTest() {
  const test1 = [4, 2, 7, 3, 7, 1, 9];
  console.log("Test 1 - Original:", test1);
  console.log("Test 1 - Sorted:", countingSort(test1));

  const test2 = [-5, -10, 0, -3, 8, 5, -1, 10];
  console.log("Test 2 - Original:", test2);
  console.log("Test 2 - Sorted:", countingSort(test2));

  const test3 = [4, 4, 4, 2, 2, 2, 8, 8];
  console.log("Test 3 - Original:", test3);
  console.log("Test 3 - Sorted:", countingSort(test3));

  const test4 = [1, 2, 3, 4, 5];
  console.log("Test 4 - Original:", test4);
  console.log("Test 4 - Sorted:", countingSort(test4));
}

countingSortTest();
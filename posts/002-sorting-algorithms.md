---
title: "CS: Sorting Algorithms"
date: "2018-06-14"
slug: "sorting-algorithms"
lead: "Four sorting techniques: Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort"
backgroundColor: "#339994"
image: "/posts/code.png"
---

## Bubble Sort
1. Loop through array.
2. Swap current and next item if unsorted.
3. Repeat steps 1 & 2 until inner loop has no swapping, meaning list is sorted.

### Big-O
- **Best-case:** `O(n)`
- **Average-case:** `O(n^2)`
- **Worst-case:** `O(n^2)`

```javascript
function bubbleSort (items) {
  let swapped = true
  while (swapped) {
    swapped = false

    for (let i = 0; i < items.length; i++) {
      const itemOne = arr[i]
      const itemTwo = arr[i + 1]
      if (itemTwo < itemOne) {
        items[i] = itemTwo
        items[i + 1] = itemOne
        swapped = true
      }
    }
  }
  return items
}
```
<br/><hr/>

## Insertion Sort
1. Loop through array.
2. Assume all items left of value are sorted (list of 0 & 1 are sorted by definition).
3. Loop backwards through sorted list on the left.
4. If value and previous item unsorted, shift previous item to the right `(index + 1)`.
5. Continue shifting items to the right until value is sorted compared to the previous item.
6. Insert value in that index.

### Big-O
- **Best-case:** `O(n)`
- **Average-case:** `O(n^2)`
- **Worst-case:** `O(n^2)`

```javascript
function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j]
    }
    items[j + 1] = value
  }
  return items
}
```
<br/><hr/>

## Merge Sort
### Merge
1. Assume sorted input arrays.
2. From the first element of each sorted list, pick the element that is next sorted to place in the sorted results
3. Continue picking until one array contains no more numbers
4. Concat whatever numbers remain to the end of the sorted results

### MergeSort
1. Divide items into two lists.
2. Recursively call `mergeSort` on smaller and smaller divided lists until they're a sorted list of 1 element.
3. Merge sorted lists.
4. Bubble back up, merging larger and larger lists.


### Big-O
- **Best-case:** `O(n log(n))`
- **Average-case:** `O(n log(n))`
- **Worst-case:** `O(n log(n))`

```javascript
function merge (arr1, arr2) {
  const results = []
  while (arr1.length && arr2.length) {
    arr1[0] <= arr2[0]
      ? results.push(arr1.shift())
      : results.push(arr2.shift())
  }
  return [...results, ...arr1, ...arr2]
}

function mergeSort (items) {
  const length = items.length

  if (length ===1) {
    return items
  } else {
    const middle = parseInt(length / 2)
    const arr1 = items.slice(0, middle)
    const arr2 = items.slice(middle, length)
    return merge(mergeSort(arr1), mergeSort(arr2))
  }
}
```
<br/><hr/>

## QuickSort
1. Pick a number (pivot).
2. Place remaining items two lists, one smaller, one larger.
3. Recursively call `quickSort` on smaller and smaller pivoted lists until they're a sorted list of 1 element.
4. Concat smaller items to the left of the pivot, larger items to the right of the pivot.
5. Bubble back up, concatenating larger and larger lists.

### Big-O
- **Best-case:** `O(n log(n))`
- **Average-case:** `O(n log(n))`
- **Worst-case:** `O (n^2)`

```javascript
function quickSort (arr) {
  if (arr.length === 1 || arr.length === 0) return arr
  const [pivot, ...rest] = arr
  const { smaller, larger } = rest.reduce((acc, item) => {
    item <= pivot ? acc.smaller.push(item) : acc.larger.push(item)
    return acc
  }, { smaller: [], larger: [] })
  return [...quickSort(smaller), pivot, ...quickSort(larger)]
}
```

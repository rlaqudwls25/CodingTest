//이진 탐색하기
function solution(arr, findValue) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[mid] === findValue) {
      return mid;
    }

    if (findValue < arr[mid]) {
      end = mid + 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

const arr = [1, 1, 5, 124, 400, 599, 1004, 2876, 8172];
solution(arr, 2876);

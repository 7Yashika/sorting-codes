function conquer(arr, si, mid, ei) {
    let merged = [];

    let idx1 = si;
    let idx2 = mid + 1;
    let x = 0;
    while (idx1 <= mid && idx2 <= ei) {
        if (arr[idx1] <= arr[idx2]) {
            merged.push(arr[idx1++]);
        } else {
            merged.push(arr[idx2++]);
        }
    }
    while (idx1 <= mid) {
        merged.push(arr[idx1++]);
    }
    while (idx2 <= ei) {
        merged.push(arr[idx2++]);
    }

    for (let i = 0, j = si; i < merged.length; i++, j++) {
        arr[j] = merged[i];
    }
}

function divide(arr, si, ei) {
    if (si >= ei) {
        return;
    }
    let mid = Math.floor(si + (ei - si) / 2);
    divide(arr, si, mid);
    divide(arr, mid + 1, ei);
    conquer(arr, si, mid, ei);
}

let arr = [9, 76, 45, 12, 7];
let n = arr.length;

divide(arr, 0, n - 1);

console.log(arr.join(" "));

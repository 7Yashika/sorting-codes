function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr[i] + " ");
    }
    process.stdout.write("\n");
}

let arr = [8, 56, 20, 4, 80];

// Selection sort
for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[smallest] > arr[j]) {
            smallest = j;
        }
    }

    // Swapping
    let temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp;
}

printArray(arr);

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr[i] + " ");
    }
    process.stdout.write("\n");
}

let arr = [7, 84, 23, 56, 10];

// Bubble sort
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swapping
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

printArray(arr);

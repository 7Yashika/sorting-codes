#include <stdio.h>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {8, 56, 20, 4, 80};
    int n = sizeof(arr) / sizeof(arr[0]);

    // Selection sort
    for (int i = 0; i < n - 1; i++) {
        int smallest = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j;
            }
        }

        // Swapping
        int temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }

    printArray(arr, n);

    return 0;
}

def printArray(arr):
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print()

arr = [7, 84, 23, 56, 10]

# Bubble sort
for i in range(len(arr) - 1):
    for j in range(len(arr) - i - 1):
        if arr[j] > arr[j + 1]:
            # Swapping
            arr[j], arr[j + 1] = arr[j + 1], arr[j]

printArray(arr)

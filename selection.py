def printArray(arr):
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print()

arr = [8, 56, 20, 4, 80]

# Selection sort
for i in range(len(arr) - 1):
    smallest = i
    for j in range(i + 1, len(arr)):
        if arr[smallest] > arr[j]:
            smallest = j

    # Swapping
    arr[i], arr[smallest] = arr[smallest], arr[i]

printArray(arr)

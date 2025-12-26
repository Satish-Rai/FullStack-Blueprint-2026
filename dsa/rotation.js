// ****** rotation or shifting with k steps ******

// Rotate Array by k steps (Right rotation)
arr = [1,2,3,4,5,6,7], k = 5;
// => [5,6,7,1,2,3,4]

const rotateRight = (arr, k) => {
    if (!Array.isArray(arr)) return 'Array is required';
    const n = arr.length;
    k = ((k % n) + n) % n;
    const result = [];

    if(k === 0) return arr;
    for (let i = n-k; i < n; i++) {
        result.push( arr[i]);
    }

    for (let index = 0; index < n-k; index++) {
        result.push(arr[index]);
    }
    return result;
}

console.log('rotate', rotateRight(arr,k));
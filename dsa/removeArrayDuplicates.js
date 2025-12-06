// Below solution has O(n2) time complexity

// function removeDuplicates(arr){
//     if(!Array.isArray(arr)) return 'Only array is supported';
//     let unique = [];
//     for (let itemIndex = 0; itemIndex < arr.length; itemIndex++) {
//         const element = arr[itemIndex];
//         if(!unique.includes(element)){
//             unique.push(element)
//         }
//     }
//     return unique;
// }

// const arr = [1,5,6,2,1,4,5];

// console.log(removeDuplicates(arr));

// ************** this has O(n) time complexity ***************

function removeDuplicates(arr){
    if(!Array.isArray(arr)) return 'Only array is supported';
    const seen = {};
    let unique = [];
    for (const item of arr) {
        if(!seen[item]){
            seen[item] = true;
            unique.push(item);
        }
    }
    return unique;
}

const arr = [1,5,6,2,1,4,5, 'Satish', "Sanvi", "Satish"];

console.log(removeDuplicates(arr));
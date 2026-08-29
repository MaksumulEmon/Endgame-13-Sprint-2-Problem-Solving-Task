// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


// 2. Find Maximum
function findMax(nums) {
    if (nums.length === 0) return undefined; // Handle empty array edge case
    return Math.max(...nums);
}

console.log(findMax([3, 7, 2, 9, 5]));


// 3. Check for Palindrome
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));


// 4. Sum Array Elements
function sumArray(nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([10, 20, 30, 40]));

// 5. Count Vowels
function countVowels(str) {
    let count = 0;

    for (let char of str) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("javascript"));


// 7. Flatten a Nested Array
function flattenArray(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5]]));




// 8. Group Anagrams
function groupAnagrams(strs) {
    let groups = {};

    for (let str of strs) {
        let key = str.split("").sort().join("");

        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(str);
    }
    return Object.values(groups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
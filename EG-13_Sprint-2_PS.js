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




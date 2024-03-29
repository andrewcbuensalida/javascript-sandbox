const nextPermutation = function (nums) { // 'baac'
  nums = nums.split('').map(num=>num.charCodeAt(0)) // now it's like [99,98,98,99]
  // console.log(`Example nums: `, nums)
	// 1, 3, 2   output: 2, 1, 3
	// find the longest decreasing sequence on the right side.
	let indexOfSwap = nums.length - 1;
	while (indexOfSwap > 0) {
		if (nums[indexOfSwap - 1] < nums[indexOfSwap]) {
			indexOfSwap--;
			break;
		}
		indexOfSwap--;
	}
	// console.log('This is indexOfSwap',indexOfSwap)
	// swap the integer to the left of that sequence with the next larger integer that's in the sequence
	let indexOfSwap2 = nums.length - 1;
	while (nums[indexOfSwap] >= nums[indexOfSwap2]) {
		indexOfSwap2--;
	}
	// if indexOfSwap2 === 0, it means it's in the last permutation, so it would go back to first, which is the reverse
	if (indexOfSwap2 === -1) {
		nums.reverse();
		return;
	}
	// console.log('This is indexOfSwap2',indexOfSwap2)
	let temp = nums[indexOfSwap];
	nums[indexOfSwap] = nums[indexOfSwap2];
	nums[indexOfSwap2] = temp;
	// reverse the sequence
	// console.log('this is nums,',nums)
	let start = indexOfSwap + 1;
	let end = nums.length - 1;
	while (start < end) {
		[nums[start], nums[end]] = [nums[end], nums[start]];
		start++;
		end--;
	}
  nums = nums.map(num=>String.fromCharCode(num)).join('') // now it's baca
	console.log('this is nums,',nums)
};

console.log(nextPermutation("padsfdshhdffgeerp")); // baac -> baca
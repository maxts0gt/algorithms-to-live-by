//Sounds pretty efficient algorithm to me.
//Merge sort divides the list into smaller atoms.
//Once it reaches to 0 or 1 length of list, it returns merged sort of left & right.
//Trick is that this has recursion in it.
//Breaking the recursion is the return line which triggers when length reaches down to 0 or 1.

function merge(arr1, arr2) {
	let list = [];
	let j = 0;
	let i = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			list.push(arr1[i]);
			i++;
		} else {
			list.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		list.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		list.push(arr2[j]);
		j++;
	}

	return list;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

mergeSort(7, 3, 4, 5);

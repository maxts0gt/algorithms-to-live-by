// First element is always the Pivot.
// We will find all the numbers lower than the pivot.
// Put lower values on the left and higher on the right
// Do the same thing again in the left and then on the right.
// Till it is a single value where left and right is the same value.
// When that happens we will return the array.
// Quicksort uses the helper function Pivot.
// Pivot finds the all high and low values and swap them.
// Which means pivot also uses the swap function.

function pivot(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	// We are assuming the pivot is always the first element
	let pivot = arr[start];
	let swapIdx = start; // swapidx has role of swapping values that is lower than the pivot value.

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++; // here swapidx + 1 means that we found value lower than pivot
			swap(arr, swapIdx, i); // which we can swap here.
		}
	}

	// Swap the pivot from the start the swapPoint
	swap(arr, start, swapIdx); // This is happening since we found all the values lower than the pivot.
	return swapIdx; // Since all values are lower, we can put the pivot at the end of the lower values.
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		//This is when the function stops (where left and right is the same number).
		let pivotIndex = pivot(arr, left, right); //3
		//left
		quickSort(arr, left, pivotIndex - 1); // pivotIndex is the swapIdx. It's basically a divider.
		//right
		quickSort(arr, pivotIndex + 1, right); //Here is the higher values, excluding the pivot
	}
	return arr;
}
quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

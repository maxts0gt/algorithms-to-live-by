arr = [8, 1, 2, 3, 4, 5, 6, 7];

//With optimization of Swaps
//Choose Bubble Sort when you think array is nearly sorted...
//noSwaps helps on time
function bubbleSort(arr) {
	var noSwaps;
	for (var i = arr.length; i > 0; i--) {
		noSwaps = true; //noSwaps sets to be true. Everytime new number is selected.
		for (var j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				//Here is tricky part, if there is nothing to swap loop ends
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false; // Sets to be false. Everytime loop ends, so loop would start again.
			}
		}
		if (noSwaps) break; // noSwaps is checked every time number is cemented. loop ends when it sets to be true
	}
	return arr;
}

//Next is fancy version, you can implement ES2015+
//Create Function which will trigger when X[y] value is higher than X[y+1] value
function bubbleSort(arr) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; //Basically swaps values in array
	};

	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

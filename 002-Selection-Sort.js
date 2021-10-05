//Same as Bubble Sort only that it finds the smallest value and puts it in the beginnig and moves on.

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let indexOfSmallest = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[indexOfSmallest]) {
				// first index, secomd indext number is compared
				indexOfSmallest = j; //if smaller found, swap it and continue with that number until the end
			}
		}
		if (i !== indexOfSmallest) {
			//When next loop begins, check if it is the first number you began with
			let temp = array[i]; //  if not, then keep the value to the temp for temporary
			array[i] = array[indexOfSmallest]; // then assign looped value to the smallest
			array[indexOfSmallest] = temp; // assign next loop candidate to the index of smallest
			//  Basically this is finish touch of the loop, so the next loop start with new number
		}
	}
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);

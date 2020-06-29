function minBribe(queue) {
	var bribes = 0, i, j;

	for (i = 0; i < queue.length; i++) {

		const pos = queue[i], at = i + 1;
		
		if (pos - at > 2) { return "Too chaotic" } 
			for (j = Math.max(0, pos - 2); j < i; j++) {
				if (queue[j] > pos) { bribes++ }
			}
	} 
	return bribes;
}

console.log(minBribe([2,3,1,5,4]));
console.log(minBribe([4,2,3,1,5]));

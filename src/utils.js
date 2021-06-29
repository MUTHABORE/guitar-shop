const sorting = (arr, field, type = `down`) => {
	arr.sort(function (a, b) {
		if (a.field > b.field) {
			return 1;
		}
		if (a.field < b.field) {
			return -1;
		}
		return 0;
	});
};

export const findMinMaxPrice = (arr, type) => {
	let prices = [];
	arr.map((guitar, index) => {
		prices[index] = guitar.price;
	})
	if (type === `min`) {
		return(Math.min(...prices));
	} else if (type === `max`) {
		return(Math.max(...prices));
	}
};

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
	let category = [];
	let finalAns = [];

	for (let obj of transactions) {
		let ind = category.indexOf(obj.category); // indexOf -> To check if it already exists
		if (ind !== -1) {
			finalAns[ind].totalSpent += obj.price;
		} else {
			let y = {
					category: obj.category, 
					totalSpent: obj.price 
    			};
			finalAns.push(y);
			category.push(obj.category);
		}
	}

	return finalAns;
}
module.exports = calculateTotalSpentByCategory;
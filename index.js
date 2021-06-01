class CoffeeShop {
	constructor (name, menu, orders = []) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;
	}

	addOrder(itemOrdered){
		if(this.menu.find(element => element.item === itemOrdered)){
			this.orders.push(itemOrdered);
			return "Added";
		} else {
			return "This item is currently unavailble!"
		}
	}

	fulfillOrder(){
		if(this.orders.length > 0) {
				return `The ${this.orders} order is ready!`;
			} else {
			return "All orders have been fulfilled";
		}

	}

	listOrders(){
		return this.orders;
	}

	dueAmount(){
		let total = 0;
		for (const item in this.menu) {
			for (const order in this.orders) {
				if (this.menu[item].item === this.orders[order]) {
					total += this.menu[item].price;
				}
					
			}
		}
	return 	`The total sum is ${total} euros`};

	cheapestItem(){
		const cheapest = this.menu.reduce(function(res, obj){
			return (obj.price < res.price) ? obj : res;
		});
		
		console.log(`The lowest item is ${cheapest.item}`)
	
	}
	// drinksOnly(){
	// 	for (let i = 0; i < this.menu.length; i++) {
	// 		if (this.menu[i].type === "drink"){
	// 			console.log(this.menu[i].item);
	// 		}
	// 	}
	// }

	foodOnly(){
		let food = this.menu.filter(item => item.type === "food");
		let foodList = food.map(foodName => foodName.item);
		return(foodList);

	}
}

const thePlanetMenu = [
  { item: "Espresso",         type: "drink", price: 2.50 },
  { item: "Macchiato",        type: "drink", price: 3.00 },
  { item: "Americano",        type: "drink", price: 3.00 },
  { item: "Flat white",       type: "drink", price: 3.00 },
  { item: "Muffin",           type: "food",  price: 2.50 },
  { item: "Stuffin",          type: "food",  price: 51.50 },
  { item: "Unicorn muffin",   type: "food",  price: 2.50 },
  { item: "Pegasos muffin",   type: "food",  price: 2.50 },
  { item: "Toast",            type: "food",  price: 1.50 },
  { item: "A single potato",  type: "food",  price: 0.50 },
  { item: "A single bean",    type: "food",  price: 0.05 },
];

const myShop = new CoffeeShop("The planet", thePlanetMenu);

console.log(myShop.addOrder("Muffin"));
console.log(myShop.addOrder("Flat white"));
console.log(myShop.addOrder("Toast"));
console.log(myShop.orders);

console.log(myShop.fulfillOrder());
console.log(myShop.listOrders());
console.log(myShop.dueAmount());
console.log(myShop.cheapestItem());
// console.log(myShop.drinksOnly());
console.log(myShop.foodOnly());
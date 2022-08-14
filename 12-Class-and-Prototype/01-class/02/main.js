class Sale {
  calcPrice() { }
}

class Beverage extends Sale {
  constructor() {
    super();
  }

  amount;
  price;
  discount;

  beverage = {
    name: "Pepsi",
    amount: 3,
    price: 19,
    discount: 0.1,
  };
}

const bev = new Beverage();
bev.calcPrice();
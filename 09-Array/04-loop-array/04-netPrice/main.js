/*
INPUT : ARRAY of sales (each item == obj)
OUTPUT : ARRAY of summary (each item == obj)
*/

function calSummary(salesArray) {
  const summary = [];
  for (let item of salesArray) {
    let currentObj = {};
    let netPrice = item.price * (1 - (item.discount ?? 0));

    currentObj.netPrice = netPrice;

    summary.push(currentObj);
  }

  return summary;
}

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];
console.log(calSummary(sales));

// สร้าง Function มารับค่า เพื่อ สร้าง Object
const MakeObject = function (obj) {
  obj.name = prompt(`Enter item name:`);
  obj.unit = +prompt(`how many :`);
  obj.price = +prompt(`How much :`);
  obj.discount = +prompt(`Discount percent:`);
};

// ราคาหลังหักส่วนลด
function discount(obj) {
  obj.price = obj.price - (obj.price * obj.discount) / 100;
  delete obj.discount;
}
const cart = {}; // สร้าง Object
MakeObject(cart); // นำ Object ไปรับค่า
discount(cart); // ทำการหักส่วนลด
console.log(cart);

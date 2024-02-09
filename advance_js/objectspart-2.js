// Here as we know tha the value of pi is fixed that is 3.14 and we cannot change it nut why and how we can't change it

const valueofPI = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);
console.log(valueofPI);

const chai = {
  name: "Milk-Tea",
  price: 341,
  isAvailable: true,

  orderchai: function () {
    console.log("chai fat gayi hai");
  }
};

console.log(Object.getOwnPropertyDescriptor(chai, "name", "price"));
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name", "price"));

for (let [key, object] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log(`here it is the ${key} and it is its value ${object}`);
  }
}

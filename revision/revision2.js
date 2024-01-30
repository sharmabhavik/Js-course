// Invoking function with object

const user1 = {
  id: 123,
  name: "Pratham",
  prices: 399,
};

function handleobject(user1) {
  const user5 = {
    id: 124,
    name: "Bhavik",
    prices: 499,
  };
}

function handleobject(anyObject) {
  console.log(
    `Username is ${anyObject.name} & prices in dollar is ${anyObject.prices}`
  );
}

// handleobject({
//   id: 125,
//   name: "kaushal",
//   prices: 99,
// });

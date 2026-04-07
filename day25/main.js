const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 18000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

// find
// const product = products.find((product) => product.id === 1);
// console.log(product);

// filter
// const filteredProducts = products.filter((product) => product.id > 3);
// console.log(filteredProducts);

// map
// const names = products.map( product => {
//     return product.name
// })
// console.log(names)

/*
* task 1: get product names with price greater than 20.000
* */

const filterProducts = products
    .filter(product => product.price > 20000)
    .map(product => product.name)
console.log(filterProducts);

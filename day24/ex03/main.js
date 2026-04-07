const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]
const productQuantityMap = {}
for ( const order of orders) {
    const items = order.items
    for(const item of items) {
        const {productId, quantity} = item
        if(productQuantityMap[productId]){
            productQuantityMap[productId] += quantity
        }
        else{
            productQuantityMap[productId] = quantity
        }
    }
}
console.log(productQuantityMap)

const productRevenueMap = {}
let maxRevenue = 0
for ( const product of products) {
    const quantity = productQuantityMap[product.id]

    const revenue = quantity * product.price


    if( maxRevenue < revenue){
        maxRevenue = revenue
    }
    productRevenueMap[product.id] = revenue
}
console.log(productRevenueMap)
console.log(maxRevenue)



























// const companies = [
//     {id: 1, name: 'fpt' },
//     {id: 3, name: 'viettel' },
//     {id: 2, name: 'vnpt' }
// ]
// const persons = [
//     {id: 1, name: 'Huong Tran', companyId: 3},
//     {id: 2, name: 'Dong Vu', companyId: 1},
//     {id: 3, name: 'Tien Vuong', companyId: null},
//     {id: 4, name: 'Son Nguyen', companyId: 2},
//     {id: 5, name: 'Bach Hoang', companyId: 3}
// ]
//
// let companyMap = {}
// for( const company of companies) {
//    companyMap[company.id] = company.name
// }
// for ( const person of persons) {
//     const {companyId} = person
//     delete person.companyId
//     if(!companyId){
//         person.company = null
//         continue
//     }
//     person.company = companyMap[companyId]
// }
// console.log(persons)

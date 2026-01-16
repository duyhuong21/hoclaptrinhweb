const companies = [
    { id: 1, name: 'fpt' },
    { id: 3, name: 'viettel' },
    { id: 2, name: 'vnpt' }
]

let count = 0

const persons = [
    { id: 1, name: 'Huong Tran', companyId: 3 },
    { id: 2, name: 'Dong Vu', companyId: 1 },
    { id: 3, name: 'Tien Vuong', companyId: null },
    { id: 4, name: 'Son Nguyen', companyId: 2 },
    { id: 5, name: 'Bach Hoang', companyId: 3 }
]

const companyMap = {}

for( const company of companies){
    companyMap
}




















// for( const person of persons ){
//     const companyId = persons.companyId
//     delete persons.companyId
//     if( companyId === null ) continue
//     for ( const company of companies){
//         if( company.id === companyId ) {
//             person.company = company.name
//             break
//         }
//         count++
//     }
// }
// console.log(persons)
// console.log(count)
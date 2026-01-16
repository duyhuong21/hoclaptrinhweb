// const students = [
//     {id:1, name: 'john'},
//     {id:2, name: 'kate'}
// ]
//
// for (const student of students) {
//     console.log(students)
//     student.name = 'replaced'
// }
// console.log(students)

//======================================================//
/*
* 2 array (companies, persons)
* id - unique number
* */

const companies = [
    { id: 1, name: 'fpt' },
    { id: 3, name: 'viettel' },
    { id: 2, name: 'vnpt' }
]

const persons = [
    { id: 1, name: 'Huong Tran', companyId: 3 },
    { id: 2, name: 'Dong Vu', companyId: 1 },
    { id: 3, name: 'Tien Vuong', companyId: null },
    { id: 4, name: 'Son Nguyen', companyId: 2 },
    { id: 5, name: 'Bach Hoang', companyId: 3 }
]

// for (const person of persons) {
//     const { companyId } = person
//     if(!companyId){
//         console.log(person.name, '--', )
//     }
//     for( const company of companies){
//         if( company.id === companyId){
//             console.log(person.name, '--', company.name)
//         }
//     }
// }

function findById(arr,id){
    for ( const item of arr){
        if( item.id === id){
            return item
        }
    }
}
function findcompanyByPersonId(persons, companies, personId){
    const person = findById(persons, personId)
    const {companyId} = person
    const company = findById(companies, companyId)
    return company ? company.name : null
}
const companyName = findcompanyByPersonId(persons, companies, 3)
console.log(companyName)


/*
* console.log(personName, '--', companyName)
* console.log(`${personName} -- ${companyName})`
* Huong Tran -- viettel
* Dong Vu -- fpt
* Tien Vuong --
* */






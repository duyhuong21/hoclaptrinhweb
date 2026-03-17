/*
number
string
bool
number[]

*/

// interface PartTimeI {
//     id: number
//     name: string
//     salary: number
//     hoursWorked?: number  // hoursWorked is optional
// }
//
// const partTime: PartTimeI = {
//     id: 1,
//     name: 'Tran Duy Huong',
//     salary: 3000000,
//     hoursWorked: 160
// }
//
// const ptn = {
//     ...partTime,
//     hoursWorked: 1000
// }
// console.log(ptn)

interface EmployeeI {
    id: number
    name: string
    salary: number
    getSalary: () => number // not function
}

class FullTimeEmployee implements EmployeeI {
    id: number
    name: string
    salary: number
    getSalary () {
        return this.salary * this.hourWorked
    }
}
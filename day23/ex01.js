const student = {
    id: 1,
    name: 'student 1',
    'custom-key': 1234
}
//get value
console.log(student.name)
//new key
student.address = 'ha noi'
student['age'] = 10

const key = 'custom-key'
student[key] = '123214'

delete student.address

console.log(student)

for( const item in student){
    console.log(item, student[item])
}

const keys = Object.keys(student)
console.log(keys)

const values = Object.values(student)
console.log(values)



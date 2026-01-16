const person = {
    name: "Huong Tran",
    age: 20,
    address: "HN",
    self: function(){
        return this
    }
}
person.self().self().name = "Dong Vu"
console.log(person.self().self());
console.log(person.name);

const {name ,age } = person
// const name = person.name
console.log(age)

const str = `${name} nam nay ${age} tuoi`
// console.log(str)
// console.log(name, "nam nay", age, "tuoi")
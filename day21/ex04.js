const huong = {
    fistName : "Huong",
    lastName: "Tran",
    Age : 20,
    girlFriend: {
        fistName : "Huong2",
        lastName: "Tran2",
        Age : 20,
        address: "768 de la thanh - Ha Noi",
        getName: function (){
            return this.fistName + " " + this.lastName
        }
    },
    address: "766 de la thanh - Ha Noi",
    getName: function (){
        return this.fistName + " " + this.lastName
    }
}

console.log(huong.address)
console.log(huong['address'])
console.log(huong.girlFriend.getName())
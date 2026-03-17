interface  AnimalI {
    id: number
    name: string

    going: ()  => void
    speaking: () => void
}

class Animal implements AnimalI {
    id: number

    name = 'animal'
    going (){
        console.log('going')
    }
    speaking (){
        console.log('speaking')
    }
}
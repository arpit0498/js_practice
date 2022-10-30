// Create two objects with name, age, and power as Ram, 2500, Treta.Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.
var personOne = {
    name: 'Ram',
    age: '25',
    power: 2500,
    yuga: 'Treta',
}

var personTwo = {
    name: 'Krishna',
    age: '31',
    power: 2325,
    yuga: 'Dwapar',
}

function checkPowers(personOne, personTwo) {

    if (personOne.power > personTwo.power) {
        console.log(`${personOne.name} has more power than ${personTwo.name}.`)
    } else if (personOne.power < personTwo.power) {
        console.log(`${personTwo.name} has more power than ${personOne.name}.`)
    } else {
        console.log(`${personOne.name} & ${personTwo.name} have equal powers.`)
    }

}

checkPowers(personOne, personTwo)

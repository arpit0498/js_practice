// Create two objects with name, age, and yuga as Ram, 25, Treta.Krishna, 31, Dwapar.Write a function which takes two objects and return the person with more age.

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



function checkAge(personOneName, personOneAge, personTwoName, personTwoAge) {
    if (personOneAge > personTwoAge) {
        console.log(`${personOneName} is older than ${personTwoName}.`)
    } else if (personOneAge < personTwoAge) {
        console.log(`${personTwoName} is older than ${personOneName}.`)
    } else {
        console.log(`${personOneName} & ${personTwoName} are of same age.`)
    }
}


// 15th
checkAge(personOne.name, personOne.age, personTwo.name, personTwo.age)
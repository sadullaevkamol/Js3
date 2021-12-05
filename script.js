//  first of all i crate prompt for amount of users : it cannot be less or equel to zero and cannot be letters

do {
    var usersAmount = +prompt('Введите количество пользователей')
}while (usersAmount === 0 || isNaN(usersAmount))

// then i create const for our object and name it usersInfo 

const usersInfo = {}

// the we crate cycle for our const 

for (i = 1; i <= usersAmount ; i++ ) {
    // then i crate variables (переменная) to the name and age of users 
    var usersName = prompt(`Введите имя ${i}-го пользователя` )
    do {
        var usersAge = +prompt(`Введите возраст пользователя ${usersName}`)
    }while (isNaN(usersAge))
    usersInfo[i] = {
        name: usersName,
        age: usersAge
    }
}

// ahowing result by consol.log()
console.log(usersInfo);
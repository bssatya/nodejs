const chalk = require('chalk')
// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(234))

const event = {
    name: 'Birthday Party',
    guestList: ['satya', 'avinav', 'tuppa'],
    printGuestList() {
        console.log(chalk.blue.inverse.underline('Guestlist list for ' + this.name))
        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
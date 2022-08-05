let isAccountLocked     =   false
let userRoll            =   'user'


if (isAccountLocked) {
    console.log(`Is account locked!`)
} else if (userRoll === 'admin') {
    console.log(`Welcome Admin!`)
} else {
    console.log(`Welcome!`)   
}

let temp                =   123

if (temp <=32) {
    console.log(`It's freezing outside!`)
} else if (temp >= 110) {
    console.log(`It's hot outside!`)
} else {
    console.log(`Go for it. It's pretty nice!`)
}
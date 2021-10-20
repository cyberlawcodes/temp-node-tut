//OS module - a built in module in node.js

const os = require('os') //this is built in so no path './'
//os.freemem //one way to access or destructure {freeman}

const user = os.userInfo() //tells us about OS for user
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
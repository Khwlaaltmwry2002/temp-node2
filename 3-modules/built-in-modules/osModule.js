const os = require("os") // this is how we can us the built-in module(os).

// info about the user
const user = os.userInfo() // os is the variable above
console.log(user)

//method returns the system uptime in seconds(how long has it been up since booting I think.)
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
}

console.log(currentOS)
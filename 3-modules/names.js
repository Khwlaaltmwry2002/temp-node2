//local
const secret = "SUPER SECRET"
//share
const john = "john"
const peter = "peter"

console.log(module) // module is a global variable. see the result when you run the code it will give you an object that shows you the properties of this boject(module) and what you exported from it(this file(the module))

module.exports = {john, peter} // this is how we export from a module using the object exports inside module we wrote john and peter only because the value is the same as the property.
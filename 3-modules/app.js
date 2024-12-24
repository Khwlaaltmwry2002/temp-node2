
const names = require("./names") // require is a function to use module(gloabl variable) inside it you write the path of the file you want to import from which is names here

console.log(names)

const sayHi = require("./utils") // this is like an import 
const data = require("./secondwayExport")
console.log(data)
require("./importingwithoutExport") // importing directly without exporting anything this will run the calling of the function in this file(I think we can do this way if we have a calling of a function in the imported file.)
sayHi("Susan");
sayHi(names.john)
sayHi(names.peter)

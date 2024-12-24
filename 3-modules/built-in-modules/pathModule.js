const path = require("path") // get the built-in module(path). To deal with file paths

console.log(path.sep) // sep returns my platform specific seperator which is (\) in my case

const filePath = path.join("/3-modules/", "/built-in-modules/","osModule.js") // join gives you the path of the passed values(folders and files) and join them to be a value and normalize it even if you add additional (/) that is not necessary like I did above it will remove it and get the (normalized path). See the result of it(run the program)

console.log(filePath)

const base = path.basename(filePath) // gives you the last file(the base) in the path which is (osModule.js) here
console.log(base)

const absolute = path.resolve(__dirname, "pathModule.js") // resolve gives you the absolute path(from D:) to the last file you pass to it. __dirname is a global varibale we talked about that gives you the current folder you are in now . see the result (run the program)
console.log(absolute)
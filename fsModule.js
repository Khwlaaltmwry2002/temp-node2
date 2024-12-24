// we have two ways to read files or to deal with files the first one(synchronous) or blocking and the second one is asynchronous or non-blocking.
// very important note when this file was inside the folder built-in-modules it was not able to read the files from the content folder so I moved it with the content folder ousite.

// the first way synchronous(blocking) blocking means prevent the next code to happen until it finishes and its really time consuming(not preferred)
const {readFileSync, writeFileSync} = require("fs") // destructure the method readFileSync out of fs module it the same as=>
  // const fs = require("fs")
  // fs.readFileSync // but destructuring is shorter and its another way to do that.
  // fs.writeFileSync
console.log("start")
const first = readFileSync("./content/first.txt", "utf8") // readFileSync enables you to read the content of a file, but you have to give it two parameters the path and encoding(utf8). first.txt is a file in content folder see it.
const second = readFileSync("./content/second.txt", "utf8")
console.log(first, second)

writeFileSync("./content/result-sync.txt", ` Here is the result: ${first}, ${second}\n`, {flag: "a"}) // writeFileSync accepts two parameters the first one is the path of the file that you want to write on, and if the file was not there node will create one, but if it was there it will overwrite whats on the file. The second parameter is the value or what you want to wirte on that file. the third parameter is optional and its an object if you add it and add the propery flag and gave it the value a it will not remove or overwrite whats on the file but it will append the new value (add it to what was before on the file).

console.log("done with this task")
console.log("starting the next one")

// the second way asynchronou(non-blocking) preferred do not block the next code from running
// with asynchronous reading for files we use callbacks besides the path and encoding
const {readFile, writeFile} = require("fs")
console.log("start")
readFile("./content/first.txt", "utf8", (err, result) => {
  if(err) { // if there is an error
    console.log(err)
    return
  }
  const first = result // the result of the file(the content of the file)
  readFile("./content/second.txt", "utf8", (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    const second = result
    writeFile("./content/result-async.txt", ` Here is the result: ${first}, ${second}`, {flag: "a"}, (err, result) => {
      if(err) {
        console.log(err)
        return
      }
      console.log("done with this task")
    })
  })
})

console.log("starting new task") // this will be printed before done with this task that is inside writeFile callback function

// he put the callbacks inside each other to be able to use first and second variables in the writeFile function because of the scope of the callbacks function or an error will happen.





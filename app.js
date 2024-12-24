// external modules: you have to install them first using npm install command. review your notebook
// I already installed package.json using npm init command
// I also installed lodash and bootstrap modules
const _ = require("lodash") // nameing convention for external modules to name them (_)
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items) // flattenDeep is a method in lodash module(library) that flatten the array. run the program and see the result. it will be [1, 2, 3, 4]
console.log(newItems)

// git commands after creating your repo for pushing them into github
// git remote add origin https://github.com/Khwlaaltmwry2002/temp-node2.git
// git branch -M main
// git push -u origin main
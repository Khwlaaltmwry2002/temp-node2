module.exports.items = ["item1", "item2"]; // this is the second way of exporting (exporting directly) without defining it with const or let. item now is a property in the object exports. we were able to use this way because exports is an object. see the result of console.log(module) in app.js when you run the program.

const person = {
  name: "Bob"
}

module.exports.singlePerson = person // the second way also of exporting.
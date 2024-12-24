// http module allows us to set up a web server
const http = require("http")

//createServer method in http module accepts two parameters(one rule for parameters is that you can name them whatever you want) but for this its preferrable to name them req (the request from the user of the browers). and res(the response from the server). the both parameters(req, res) are objects which have methods and properties
const server = http.createServer((req, res) => { 
  if(req.url === "/") { //url property tells us what address client is requesting(in this case the home page) becasue we are using one slash(/). wirte in google chrome localhost:5000 to see the result. you need to run this program every time to see the resutl of the different pages
    // res.write("Welcome to our home page") // the response from our server
     res.end("Welcome to our home page") // ending the response. we can write our response in end method also beside write method that commented above
  } 
  if(req.url === "/about") { // if the user requesting about page(write in the url of google chrome localhost:5000/about) to see the result. you need to run the program every time you test a new page

    res.end("Here is our short history")
  }
  // if the page does not exist show him what's below write for exampla localhost:5000/contact
  res.end(` 
    <h1>Opps!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000) // 5000 is the port that the server is listening to(the port ofthe browers I think). You can change it I think.
// open google chrome and write localhost:5000 in the url and you will see the response(welcome to our home page)
// if you ran this program the server will keep waiting for request and this is what we want that our server stays up.
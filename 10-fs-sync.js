//this node.js is built in and it manages paths - apps are run on different environments like locally or heroku 
//different paths allow you to build for different environments 


//Fs (file synch) node - nonblocking code and call back functions - built in node.js that is built in 
// you can do synchronously (blocking) and asynchronous (nonblocking) -- study this
//destructing methods 
// this one is sychronous 
const {readFileSync, writeFileSync } = require('fs')
// note:  this is the same as fs.readFileSync and fs.writeFileSync 
console.log("start");
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')
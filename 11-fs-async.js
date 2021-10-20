//this node.js is built in and it manages paths - apps are run on different environments like locally or heroku 
//different paths allow you to build for different environments 


//Fs (file synch) node - nonblocking code and call back functions - built in node.js that is built in 
// you can do synchronously (blocking) and asynchronous (nonblocking) -- study this
//destructing methods 
// this one is asychronous - we need callback for when an event is done - like onclick event

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
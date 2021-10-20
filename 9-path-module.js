//this node.js is built in and it manages paths - apps are run on different environments like locally or heroku 
//different paths allow you to build for different environments 


const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)

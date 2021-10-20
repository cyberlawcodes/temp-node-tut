// no window but there are global variables


// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info bout current module (file)
// process - info about env where the program is being executed

console.log(__dirname)

setIntervale(() => {
    console.log('hellow world')
}, 1000)
// import people.js into this using require


const {names, ages} = require('./people');

console.log(names, ages);

// os - no need for a file,, already built-in in the node
// platform and homedir are functions called by os from node 

const os= require('os'); 
console.log(os.platform(),'and', os.homedir());
const fs= require('fs');
// fs- file system / built in node/ to perform following actions:

// to read files
// callback funcn fires up the req cause readFile funct takes time...
// till then the code continues to run and doesnt wait for readFile to show
fs.readFile('./read.txt', (err, data)=>{
    if(err){
        console.log('error');
    }
console.log(data.toString());
}); 

console.log('last line');

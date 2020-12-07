
const fs= require('fs');
fs.writeFile('./docs/read.txt','hey im not writing in this woah',()=>{
    console.log('file was written and its content were replaced');

})
fs.writeFile('./docs/doc2.txt','this file doesnt exist but it might',()=>{
    console.log('file was created');

})


console.log('done ');

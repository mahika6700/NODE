const { fstat } = require("fs");

// create a directory

const fs= require('fs');

if(!fs.existsSync('./newfold')){
    fs.mkdir('./newfold',(err)=>{
        if(err){
            console.log('error');
        }
        console.log('directory created');
    
    })

}                                     // to delete a directory:-
else{
    fs.rmdir('./newfold',(err)=>{
        if(err){
            console.log('error'); 
        }
        console.log('deleted');

    })
}

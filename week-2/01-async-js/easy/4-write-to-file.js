// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const content = " Age : 20"
fs.writeFile("./a.txt" , content,"utf-8",(err) => {
    try{
        console.log("Succesfull");
    } catch(err){
        console.error("Coudn't edit file")
    }
})
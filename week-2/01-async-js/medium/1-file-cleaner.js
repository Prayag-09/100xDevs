// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example,

// Convert this : ( Input)
// hello     world    my    name   is       raman

// Into this : ( Output)

// hello world my name is raman -->

const fs = require("fs").promises;

async function read() {
    try {
        const data = await fs.readFile("./a.txt", "utf-8");
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function updating() {
    const ans = await read();
    try{
        return ans.replace(/\s+/g, ' ');  // \s for spaces , + for repeated spaces
    } catch(err){
        console.log(err);
        return null;
    }
}

async function Write(){
    const finalAns = await updating();
    try {
        await fs.writeFile("./a.txt", finalAns, "utf-8");
        console.log("Succesfull");
    } catch (err) {
        console.error(err);
    }
}

Write();
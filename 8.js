/* Users — Create a single object file and validate it

Goal: Create config.json (a single object, not an array).

Fields: theme (string), language (string), notifications (boolean) */

import fs from "fs";

const filename = "config.json";

const configurations = {
    "theme": "dark", 
    "language": "pt-br", 
    "notifications": true
}

// Format the JavaScript object to JSON String
const formattedObject = JSON.stringify(configurations, null, 4);

// Write the file to a archive with the filename
fs.writeFileSync(filename, formattedObject);

function validateJson(input){
    try{
        const file = fs.readFileSync(input, "utf-8");
        JSON.parse(file);
        console.log("VALID JSON!");
    } catch (err) {
        console.log("INVALID JSON!");
        throw err;
    }
}

validateJson(filename);
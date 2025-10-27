/* Users — Create a single object file and validate it

Goal: Create config.json (a single object, not an array).

Fields: theme (string), language (string), notifications (boolean) */

const { Console } = require("console");
const fs = require("fs");

const filename = "config.json";

const configurations = {
    "theme": "dark", 
    "language": "pt-br", 
    "notifications": 1
}

fs.writeFileSync(filename, configurations, null, 4);

function validateJson(input){
    try{
        const file = fs.readFileSync(input, "utf-8");
        JSON.parse(file);
        console.log("VALID JSON!");
    } catch (err) {
        console.log("INVALID JSON!");
        throw error;
    }
}

validateJson(filename);
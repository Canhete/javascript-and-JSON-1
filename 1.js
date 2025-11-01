/* Goal: Represent 4 products.

Fields:
id (number), name (string), price (number)

Output:
products.json (valid JSON) */

import fs from "fs";

function validateJson(input){
    try {
        const text = fs.readFileSync(input, "utf-8");
        JSON.parse(text);
        console.log("VALID JSON!");
    } catch (err) {
        console.log("INVALID JSON!");
    }
}

validateJson("products.json");
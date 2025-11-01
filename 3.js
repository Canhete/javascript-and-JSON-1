// Validate the syntax of orders

import fs from "fs";

const filename = "customerOrder.json";

function ValidateSyntaxOrders(filename){
    try {
        const file = fs.readFileSync(filename, "utf-8");
        const jsonfile = JSON.parse(file);
        console.log("Valid JSON Syntax!");

        if(Array.isArray(jsonfile)){
            const orders = jsonfile.filter((e) => e.orderId);
            console.log("Orders with valid orderId:", orders);
        } else {
            console.log("JSON is not a array!");
        }
    } catch (err) {
        console.log("Invalid JSON Syntax in orders!");
    }
}

ValidateSyntaxOrders(filename);
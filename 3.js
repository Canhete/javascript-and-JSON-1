// Validate the syntax of orders

const fs = require("fs");

const filename = "customerOrder.json";
const file = fs.readFileSync(filename, "utf-8");
const jsonfile = JSON.parse(file);


function ValidateSyntaxOrders(input){
    try {
        const orders = input.filter((e) => e["orderId"]);
        console.log("Valid JSON Syntax in orders!");
        console.log(orders);
    } catch (err) {
        console.log("Invalid JSON Syntax in orders!");
    }
}

ValidateSyntaxOrders(jsonfile);

/* Goal: Represent 3 orders.

Fields: orderId (number), customer (string), total (number) */

import fs from "fs";

const filename = "customerOrder.json";

const customerOrder = [
    {"orderId": 1, "customer": "Pedro", "total": 1500.00},
    {"orderId": 2, "customer": "Laura", "total": 1300.00},
    {"orderId": 3, "customer": "Thigo", "total": 800.00}
]

const jsonString = JSON.stringify(customerOrder, null, 4);
const file = fs.writeFileSync(filename, jsonString);

function validateJson(input){
    try{
        const text = fs.readFileSync(input, "utf-8");
        JSON.parse(text);
        console.log("JSON VÁLIDO!");
    } catch (err) {
        console.log("JSON INVÁLIDO!");
    }
}

validateJson(filename);

console.log(jsonString);
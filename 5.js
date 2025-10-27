/* Visualize data with console.table
Goal: Display orders neatly. */

const fs = require("fs");

const filename = "customerOrder.json";
const file = fs.readFileSync(filename, "utf-8");
const jsonfile = JSON.parse(file);

console.table(jsonfile, ["orderId"]);
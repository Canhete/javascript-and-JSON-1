/* Show only one column with console.table
Goal: Show just orderId */

import fs from "fs";

const filename = "customerOrder.json";
const file = fs.readFileSync(filename, "utf-8");
const jsonfile = JSON.parse(file);

console.table(jsonfile, ["orderId"]);

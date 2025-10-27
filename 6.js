/* Filter data (IDs greater than X)
Goal: Show only orders where orderId > 101. */

const fs = require("fs");

const filename = "customerOrder.json";
const file = fs.readFileSync(filename, "utf-8");
const jsonfile = JSON.parse(file);

const filteredOrders = jsonfile.filter((e) => e.orderId > 2);

console.table(filteredOrders);


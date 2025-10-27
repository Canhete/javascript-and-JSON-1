/* Convert array → JSON string (stringify)
Goal: Show how to stringify (pretty printed). */

const fs = require("fs");

const filename = "customerOrder.json";
const file = fs.readFileSync(filename, "utf-8");
const jsonfile = JSON.parse(file);

const text = JSON.stringify(jsonfile, null, 2);
console.table(text);
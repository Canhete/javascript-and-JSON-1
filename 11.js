/* Create a JSON with nested objects/arrays
Goal: Build catalog.json with nested data. (Use different fields) */

import fs from "fs";

const catalog = {
  storename: "Miau-Miau Café Gato",
  menu: [
    {appetizers: [
        { name: "Garlic Bread", price: 9.90 },
        { name: "Caesar Salad", price: 12.50 },
        { name: "Rolled Cheese", price: 7.00 },
        { name: "Rain Cakes", price: 10.00 }
      ]},
    {maincourses: [
        { name: "Grilled Chicken with Vegetables", price: 24.90 },
        { name: "Spaghetti Bolognese", price: 22.00 },
        { name: "Chicken Strogonoff", price: 25.00 },
        { name: "Hard Boiled Omelettes", price: 18.50 }
      ]},
    {desserts: [
        { name: "Chocolate Mousse", price: 11.00 },
        { name: "Cheesecake", price: 13.00 },
        { name: "Cupcakes", price: 8.50 },
        { name: "Birthday Cake", price: 17.00 }
      ]},
    {drinks: [
        { name: "Water", price: 3.00 },
        { name: "Soda", price: 6.00 },
        { name: "Wine", price: 15.00 },
        { name: "Beer", price: 9.00 }
      ]}
  ]
};

const filename = "catalog.json";
const jsonfile = JSON.stringify(catalog, null, 4)

fs.writeFileSync(filename, jsonfile, "utf-8");
console.log(`'${filename}' created sucessful!`);

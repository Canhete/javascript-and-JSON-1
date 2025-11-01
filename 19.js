/* Convert it into JSON */

import { payments } from "./15.js";
import fs from "fs";

const filename = "payments.json";

function convertToJSON(input){
    console.log("================= CONVERTING INTO JSON ===========================");
    const validPayments = [];

    input.forEach((item, index) => {
        try{
            const stringified = JSON.stringify(item);

            validPayments.push(stringified);

            console.log(`[${index}]: Converted to JSON sucessfully!`);
        } catch (err) {
            console.log(`[${index}]: ERROR Converting into JSON!`);
        }
    });

    const stringifiedPayments = JSON.stringify(validPayments, null, 4);
    fs.writeFileSync(filename, stringifiedPayments, "utf-8");
    console.log(`Saved ${validPayments.length} valid payments into ${filename}`);
}

convertToJSON(payments);

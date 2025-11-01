/* 18 - Validate payment's structure with stringfy */

import { payments } from "./15.js";

payments.push({paymentId: "ana", 'customer': "", value: 1000.00});

function validateWithStringify(input){
    console.log("============ USING STRINGFY METHOD ===============");
    const requiredFields = ["paymentId", "customer", "amount"];

    input.forEach((item, index) => {
        try {
            JSON.stringify(item);

            const errors = [];

            requiredFields.forEach((field) => {
                if(!(field in item)) errors.push(`Missing field: ${field}`);
            });

            const extraFields = Object.keys(item).filter((field) => !requiredFields.includes(field));
            if (extraFields.length > 0) errors.push(`Unexpected extra fields: ${extraFields.join(", ")}`);

            if(typeof item.paymentId !== "number") errors.push("paymentId must be a number");
            if(typeof item.customer !== "string") errors.push("customer must be a string");
            if(typeof item.amount !== "number") errors.push("amount must be a number");

            if (errors.length > 0) {
                console.log(`[${index}]: INVALID! ${errors.join("; ")}`);
            } else {
                console.log(`[${index}]: VALID JSON STRUCTURE and field types!`);
            }
        } catch (err) {
            console.log(`[${index}]: INVALID JSON STRUCTURE!`);
        }
    });
}

validateWithStringify(payments);
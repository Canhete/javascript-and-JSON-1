/* Payments — In the console, create an array of objects and validate it
Goal: Represent 5 payments.

Fields: paymentId (number), customer (string), amount (number)
*/

export const payments = [
    {paymentId: 1, customer: "Pedro", amount: 100.00},
    {paymentId: "2", customer: 'Ana', amount: 97.50},
    {paymentId: 3, customer: 'Gabriela', amount: "23.75"},
    {"paymentId": 4, "customer": "Victor", "amount": 19.30},
    "{'paymentId:' 5, 'customer': 'Caio', 'amount': 25.00}"
]

function validatePayment(arr){
    arr.forEach((item, index) => {
        const errors = [];

        if (typeof item.paymentId !== "number") errors.push("paymentId is not a number");
        if (typeof item.customer !== "string") errors.push("customer is not a string");
        if (typeof item.amount !== "number") errors.push("amount is not a number");

        if (errors.length > 0) {
            console.log(`[${index}] ERROR: ${errors.join(", ")}`);
        } else {
            console.log(`[${index}] VALID: is a valid payment object`);
        }
    });
}

validatePayment(payments);
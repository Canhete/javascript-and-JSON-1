/* Create invalid JSON on purpose (trailing comma) and validate it
Goal: Introduce and correct syntax mistakes ((trailing comma)). Code snippet:

    { "name": "Alice", "age": 30, }   // trailing comma ❌
    { 'name': 'Alice' }               // single quotes ❌
    { name: "Alice" }                 // missing quotes ❌
*/

const invalidJsons = [
    '{"name": "Alberto", "age": 30, }',     // 0
    "{'name': 'Benardo', 'age': '26' }",    // 1
    '{ name: "Carlos", age: 19 }',          // 2
    '{ name: Denise, age: 21}',             // 3
    "{'name': 'Eduardo', 'age': 34}",       // 4
    '{"name": "Flávio", "age": 43}',        // 5
]

function validateJSONArray(input){
    input.forEach((item, index) => {
        try {
            const parsed = JSON.parse(item);

            if(typeof parsed.name !== "string"){
                console.log(`[${index}] ERROR:"name" must be a string!`);
            } else if(typeof parsed.age !== "number"){
                console.log(`[${index}] ERROR: "age" must be a number!`);
            } else {
                console.log(`[${index}] VALID: valid object!`);
            }
        } catch (err){
            console.log(`[${index}] ERROR: invalid JSON format!`);
        }
    });
}

validateJSONArray(invalidJsons);
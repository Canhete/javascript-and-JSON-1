/* Profile — In the console, create a single object and validate it
Goal: Create a single object named profile.

Fields: name (string), age (number), city (string), skills (array of strings) */

export const profile = {
    name: "Pedro",
    age: 28,
    city: "São Paulo",
    skills: ["Gardening", "Painting", "Social Engineering", "Oratory", "Brazillian Literacy Teacher"]
};

function validateObject(obj){
    let errors = 0;

    if(typeof obj !== "object"){
        console.log("INVALID: The profile must be a object!");
        errors++;
    }

    if(Array.isArray(obj)){
        console.log("INVALID: The profile must be a single object, not a array of objects!");
        errors++;
    }

    if(typeof obj.name !== "string"){
        console.log("INVALID: Name must be a string!");
        errors++;
    }

    if(typeof obj.age !== "number"){
        console.log("INVALID: Age must be a number!");
        errors++;
    }

    if(typeof obj.city !== "string"){
        console.log("INVALID: City must be a string!");
        errors++;
    }

    if(!Array.isArray(obj.skills)) {
        console.log("INVALID: Skills must be an array of strings!");
        errors++;
    } else if (!obj.skills.every(skill => typeof skill === "string")) {
        console.log("INVALID: All skills must be strings!");
        errors++;
    }

    if(errors === 0){
        console.log(`VALID: '${obj.name}' is a valid profile object!`);
    }
}

validateObject(profile);
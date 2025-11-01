/* Convert it into JSON (stringify)
Goal: Convert your profile object to JSON text. */

import { profile } from "./9.js";

const jsontextOBJ = JSON.stringify(profile, 4, null);

console.log(`JSON: ${jsontextOBJ}`);
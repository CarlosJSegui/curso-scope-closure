"use strict";
pi = 3.1416; // var pi = undefined
console.log(pi);

function myFunction() {
    "use strict";
    return pi = 3.1416;
}

console.log(myFunction());
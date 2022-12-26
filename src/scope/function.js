function greeting () {
    let username = "Ana";
    console.log(username);

    if (username === "Ana") {
        console.log(`Hello ${username}!!`)
    }
}

greeting();
console.log(username); // Error no esta asignada

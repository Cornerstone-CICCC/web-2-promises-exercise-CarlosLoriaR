const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

fs.readFile("./firstname.txt", "utf-8")
    .then((firstName) => {
        return fs.readFile("./lastname.txt", "utf-8").then((lastName) => {
            return fs.readFile("./age.txt", "utf-8").then((age) => {
                return fs.readFile("./hobbies.txt", "utf-8").then((hobbies) => {

                    const hobbiesArray = hobbies
                        .replace(/[\[\]"]/g, "")
                        .split(",")
                        .map((h) => h.trim());

                    console.log(
                        `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbiesArray.join(" and ")} (then-catch)`
                    );
                });
            });
        });
    })
    .catch((err) => console.error(err));


// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readFiles() {
    try {
        const firstName = await fs.readFile("./firstname.txt", "utf-8");
        const lastName = await fs.readFile("./lastname.txt", "utf-8");
        const age = await fs.readFile("./age.txt", "utf-8");
        const hobbies = await fs.readFile("./hobbies.txt", "utf-8");

        const hobbiesArray = hobbies
            .replace(/[\[\]"]/g, "")
            .split(",")
            .map((h) => h.trim());

        console.log(
            `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbiesArray.join(" and ")} (async/await)`
        );

    } catch (err) {
        console.error(err);
    }
}

readFiles();

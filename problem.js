/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/


/*
- Create a function to verify if user password is correct

- Make an if else statement for if password is correct, access is granted, but else would be access denied

- Create two ceperate if statements for if user types in forgot or reset

- Create a way to check if password input can be verified
*/

let password = "PinkleDinkyFam";
let requiredInput = password;


function passwordVerification(password, requiredInput){
    if (password === requiredInput) {
    console.log("Access Granted!")
    } else {
    console.log("Access Denied!")
    }
    if (password === "forgot") {
    console.log("Here is a hint")
    }
    if (password === "reset") {
    console.log("Let's reset your account")
    }

}

passwordVerification("PinkleDinkyFam", requiredInput)
passwordVerification("notPinkleDinkyFam", requiredInput)
passwordVerification("forgot", requiredInput)
passwordVerification("reset", requiredInput)
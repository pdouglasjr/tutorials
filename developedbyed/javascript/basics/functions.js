const output = document.getElementById("Output");

// function signUp() {
//     let name = prompt("What is your name?");
//     return name;
// }

// function greet() {
//     output.innerHTML = `Welcome to our website, ${signUp()}!`;
// }

// greet();

function max(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}.`;
    } else if (num2 > num1) {
        return `${num1} is less than ${num2}.`;
    } else {
        return `${num1} equals ${num2}.`;
    }
}

output.innerHTML = max(Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100));
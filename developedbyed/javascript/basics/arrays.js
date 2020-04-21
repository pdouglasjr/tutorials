let output = document.getElementById("Output");

let fruits = ["apples", "bananas", "cherries", "dates", "grapes", "kiwi"];
let vegetables = ["zucchini", "yellow squash", "wasabi peas", "tomato", "radish", "spinach"]

for(i=0; i<fruits.length; i++) {
    let htmlElement = document.createElement("h3");
    htmlElement.innerText = `${i}: ${fruits[i]}`;
    output.appendChild(htmlElement);
}

output.appendChild(document.createElement("hr"));

vegetables.forEach(function (veggie, index) {
    let htmlElement = document.createElement("h3");
    htmlElement.innerText = `${index}: ${veggie}`;
    output.appendChild(htmlElement);
})
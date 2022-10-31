// console.log(window);
console.dir(window);
// console.log(window.document.body.children[1].children[0].href);

// document.body.children[1].children[0].href = "https://google.com";


let anchorElement = document.getElementById("external-link");
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector("p a");
// anchorElement = document.querySelectorAll("p a");
anchorElement.href = 'https://academind.com';

let newAnchorElement = document.createElement("a");

// let firstParagraph = document.querySelector('p');
let firstParagraph = document.getElementById('first-paragraph');

// newAnchorElement.outerText = "new anchor element"
newAnchorElement.textContent = "new anchor element";

newAnchorElement.href = 'Test';
console.dir(newAnchorElement);
firstParagraph.append(newAnchorElement);

let firstH1 = document.getElementById('first-h1');

firstH1.remove();
// firstH1.parentElement.removeChild(firstH1);

firstParagraph.parentElement.append(firstParagraph);

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi This is <strong>important</strong>";

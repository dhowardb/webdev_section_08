// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!


// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

const firstButtonElement = document.querySelector('button');
const secondButtonElement = document.getElementById('buttonSecond');
// console.log(firstButtonElement);
// console.log(secondButtonElement);

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function onFirstButtonClicked(event) {
    console.dir(firstButtonElement);
    console.log(firstButtonElement.textContent);
}

function onSecondButtonClicked(event) {
    console.dir(event);
    console.log(event.target.textContent);
}

firstButtonElement.addEventListener("click", onFirstButtonClicked);
secondButtonElement.addEventListener("click", onSecondButtonClicked);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const firstParagraphElement = document.getElementById("first-paragraph");
const thirdParagraphElement = document.getElementById("third-paragraph");

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function onFirstButtonClicked(event) {
    console.dir(firstButtonElement);
    console.log(firstButtonElement.textContent);

    thirdParagraphElement.remove();
}

function onSecondButtonClicked(event) {
    console.dir(event);
    console.log(event.target.textContent);

    firstParagraphElement.style.backgroundColor = 'rgb(0, 178, 223)';
}

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function onSecondButtonClicked(event) {
    console.dir(event);
    console.log(event.target.textContent);

    firstParagraphElement.classList.add('color-update');
}
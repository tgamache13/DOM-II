// Your code goes here

//mouseover - logo text turns yellow
const logoTitle = document.querySelector('.logo-heading');
logoTitle.addEventListener("mouseover", (e) => {
    e.target.style.color = "yellow";
    setTimeout(() => {
        e.target.style.color = "";
    }, 500);
}, false);

//keydown event - console log keydowns
document.addEventListener('keydown', logKey);
function logKey(e) {
    console.log(`${e.code}`);
}

//wheel - zoom in on the top title on top of page
function zoom(e) {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('.logo-heading');
el.addEventListener('wheel', zoom);

//dblclick event on let's go headline - change background to yellow
let headlines = document.querySelectorAll('.text-content h2');
let letsGo = headlines[0];
letsGo.addEventListener('dblclick', (e) => {
    e.target.style.background = "yellow";
});

//mouseenter event when mouse enters bottom three text areas
let destinations = document.querySelectorAll('.destination');
let destOne = destinations[0];
destOne.addEventListener('mouseenter', e => {
    e.target.style.border = '2px solid blue';
});
let destTwo = destinations[1];
destTwo.addEventListener('mouseenter', e  => {
    e.target.style.border = '2px solid green';
});
let destThree = destinations[2];
destThree.addEventListener('mouseenter', e => {
    e.target.style.border = '2px solid purple';
});

//mouseleave event when mouse leaves bottom three text areas
destOne.addEventListener('mouseleave', e => {
    e.target.style.border = '';
});
destTwo.addEventListener('mouseleave', e => {
    e.target.style.border = '';
});
destThree.addEventListener('mouseleave', e => {
    e.target.style.border = '';
});

//add a form 

let form = document.createElement("FORM");
form.setAttribute("id", "myForm");
document.body.appendChild(form);

let input = document.createElement("INPUT");
input.setAttribute("type", "text");
input.setAttribute("value", "Name");
document.getElementById("myForm").appendChild(input);

//created submit button to do the 'prevent default' task
let submitButton = document.createElement("BUTTON");
submitButton.setAttribute("value", "Submit");
document.getElementById("myForm").appendChild(submitButton);
submitButton.textContent = "Submit";

//prevent default on submit button - form does not reset when Submit button is clicked
submitButton.addEventListener('click', function(event) {
    event.preventDefault()
});

//focus and blur on the text field of form
input.addEventListener('focus', (event) => {
    event.target.style.background = 'yellow';
});

input.addEventListener('blur', (event) => {
    event.target.style.background = 'silver';
});

//change - when text in input is changed - prints text entered to the console
input.addEventListener('change', updateValue);

function updateValue(e) {
    console.log(e.srcElement.value);
}

//select text in the input field
let log = document.createElement("P");
log.setAttribute("id", "logForm");
document.body.appendChild(log);

function logSelection(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}
input.addEventListener('select', logSelection);

//stopping propagation
let smallNav = document.querySelector('.nav');
console.log(smallNav);
let largeNav = document.querySelector('.nav-container');
console.log(largeNav);

smallNav.addEventListener('click', event => {
    event.stopPropagation();
    event.target.style.background = 'yellow';
})
largeNav.addEventListener('click', event => {
    event.target.style.background = 'silver';
})
function problemOne(event) {

  const target = event.target;
  // code here:
  target.parentNode.removeChild(target);
  console.log(event);
  
}

// reference the elment "#remove-me" and add an eventlistener for the click event:
// your code here:
let elementOne = document.querySelector('#remove-me')
elementOne.addEventListener('click', problemOne)

/* ---------------------------------------- */

function problemTwo(event) {
  const target = event.target;
  // your code here:
  target.parentNode.removeChild(target);
  console.log(event)

}

// reference the elment "#remove-my-children" and add an eventlistener for the click event:
// your code here
let elementTwo = document.querySelector('#remove-my-children')
elementTwo.addEventListener('click', problemTwo)
/* ---------------------------------------- */

function problemThree(event) {

  const target = event.target;
  // your code here
  target.parentNode.removeChild(target);
  console.log(event)
}

// reference the elment "#remove-my-children-then-me" and add an eventlistener for the click event:
// your code here:
let elementThree = document.querySelector('#remove-my-children-then-me')
elementThree.addEventListener('click', problemThree)
/* ---------------------------------------- */

function problemFour(event) {

  const target = event.target;
  // your code here
  target.parentNode.appendChild(target);
  console.log(event)
}

// reference the elment "#add-children" and add an eventlistener for the click event:
// your code here:

let textFour = document.createElement("div")
let p = document.createElement("p")
elementFour.appendChild("textfour", p)
let elementFour = document.querySelector("add-children").appendChild(elementFour)
elementFour.addEventListener('click', problemFour)

/* ------------------not finished not sure how to---------------------- */

function problemSix({target}) {

  const target = event.target;
  // your code here
  target.parentNode.childNode(target);
}

// reference the elment "#increment-child" and add an eventlistener for the click event:
// your code here:
let elementSix = document.querySelector('#increment-child')
var foo = document.getElementById('#increment-child').innerHTML
foo++;
document.getElementById('#increment-child').innerHTML = foo;
elementSix.addEventListener('click', problemSix)
/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */
function problemOne(event) {

  const target = event.target;
  
  target.parentNode.removeChild(target);
  console.log(event);
  
}

let elementOne = document.querySelector('#remove-me')
elementOne.addEventListener('click', problemOne)

/* ---------------------------------------- */

function problemTwo(event) {
  const target = event.target;
  target.parentNode.removeChild(target);
  console.log(event)

}

let elementTwo = document.querySelector('#remove-my-children')
elementTwo.addEventListener('click', problemTwo)
/* ---------------------------------------- */

function problemThree(event) {

  const target = event.target;
  
  target.parentNode.removeChild(target);
  console.log(event)
}


let elementThree = document.querySelector('#remove-my-children-then-me')
elementThree.addEventListener('click', problemThree)
/* ---------------------------------------- */

function problemFour({target}) {
  target.style.flexWrap = 'wrap';
  const elm = document.createElement('div')
    elm.classList.add("child");
    elm.innerText = 'New Child';
    elm.style.margin = '4px';
    if(target.id === "add-children"){
      target.appendChild(elm);
    } 
    else
    {    target.parentNode.appendChild(elm); 
     }
}

let elementFour = document.querySelector('#add-children')
elementFour.addEventListener('click', problemFour)

/* ---------------------------------------- */

function problemFive({target}) {

  if(target.children.length === 0){   target.parentNode.appendChild(target);  }
}

let elementFive = document.querySelector('#to-the-back');elementFive.addEventListener('mouseup', problemFive);
/* ---------------------------------------- */

function problemSix({target}) {

  const target = event.target;
  // your code here
  target.parentNode.appendChild(target);
}

// reference the elment "#increment-child" and add an eventlistener for the click event:
// your code here:
var click = 0;
click++;
let elementSix = document.querySelector('#increment-child');elementSix.addEventListener('click', problemSix);
/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */


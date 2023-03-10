// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
 }

 function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
 }


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }
  
  })





 document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight()
    }
  
  })

function moveDodgerUp() {
    let upNumbers = dodger.style.up.replace('px', '');
    let up = parseInt(upNumbers, 10)
    if (up > 0) {
        dodger.style.up = `${up - 1}px`
    }
 }



const body = document.querySelector("body");
// body.style.backgroundColor = 'red'

function setColor(colorName) {
  body.style.backgroundColor = colorName;
}


function randomColor() {
    const red = Math.round( Math.random() * 255)
    const green = Math.round( Math.random() * 255)
    const blue = Math.round( Math.random() * 255)
    // console.log(red);
    

    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color
    
}
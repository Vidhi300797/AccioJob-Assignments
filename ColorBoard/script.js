const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARES = 525;

window.onload = () => {
    let container = document.getElementById("container");
    for(let i=0; i<SQUARES; i++) {
        let square = document.createElement("div")
        square.classList.add("square") // Adds class to element while DOM Manipulation( element.classList.add())
        
        container.appendChild(square)
    
        square.addEventListener("mouseover", () => setColor(square)) // Adds event listener
        square.addEventListener("mouseout", () => removeColor(square))
    
        
    }
}


function setColor(element) {
    const color = randomColour()

    element.style.background = color
    element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = "#1d1d1d"
    element.style.boxshadow = "0 0 2px #000"
}

function randomColour() {
  const index = Math.floor(Math.random()*colors.length)
  return colors[index]
}
document.addEventListener("DOMContentLoaded", function(){ console.log("developed by undefinedindustries.com")

let canvas = document.querySelector("#canvas")
console.log(canvas)



//globally declare selected color variable
let selectedColor = "black"

//globablly set default background color to match selected color
let header = document.getElementById("headerRow")
header.style.backgroundColor = selectedColor

//globally set canvas container border color to match selected color
let mainContainer = document.getElementById("main-container")
mainContainer.style.border= "solid .001rem"
mainContainer.style.borderColor = selectedColor

// Create palatte
let palatte = document.getElementById("palatte")

  for (let i = 1; i < 20; i++){
    let swatch = document.createElement("button")
    console.log(swatch)
    swatch.style.width = "90%"
    swatch.style.paddingBottom = "30px"
    swatch.style.marginBottom = "10px"
    swatch.style.float = "left"
    swatch.style.backgroundColor = randomHexCode()
    swatch.style.border = "solid gray .001rem"
    palatte.appendChild(swatch)
    swatch.addEventListener("click", function(){
    console.log(event)
    selectedColor = swatch.style.backgroundColor
    header.style.backgroundColor = selectedColor
    mainContainer.style.borderColor = selectedColor

 })
}

// Create canvas
    for (let i = 1; i < 5000 ; i++){

      let tile = document.createElement("div")
      console.log(tile)
      tile.style.width = "10px"
      console.log(tile)
      tile.style.paddingBottom = "10px"
      console.log(tile)
      tile.style.float = "left"
      tile.style.backgroundColor = "white"
      tile.style.border= "solid .001rem"
      tile.style.borderColor = "gray"
      canvas.appendChild(tile)
      console.log(tile)
      tile.addEventListener("click" , function(){
      tile.style.backgroundColor = selectedColor
      })
  }
//Change Header bagckground color based on selectedColor


//Random Color Palatte Generator

function randomHexCode() {
  let code = "#"
  const hexLetters = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']
  for ( let i = 0; i < 6; i++) {
    code += hexLetters[Math.floor(Math.random() * 15)]
  }
  return code
}
randomHexCode()


//picking up a color
//add listening event to button divs
//if button clicked, selectedColor = clicked color


//if clicked change background color of event.target to selected color











})

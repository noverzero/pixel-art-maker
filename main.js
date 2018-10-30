document.addEventListener("DOMContentLoaded", function(){ console.log("developed by undefinedindustries.com")

let canvas = document.querySelector("#canvas")
console.log(canvas)

//globally declare selected color variable
let selectedColor = "black"

//globally set default color for content text
let chicken = document.getElementById("chicken")

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
    swatch.style.border = "solid gray .01rem"
    palatte.appendChild(swatch)
    swatch.addEventListener("click", function(){
    console.log(event)
    selectedColor = swatch.style.backgroundColor
    //Change Header bagckground color based on selectedColor
    header.style.backgroundColor = selectedColor
    mainContainer.style.borderColor = selectedColor
    chicken.style.color = selectedColor
    currentColor.style.backgroundColor = selectedColor
 })
}
//create eraser
let eraser = document.getElementById("eraser")
let eraserColor = document.createElement("button")
eraserColor.style.width = "50px"
eraserColor.style.paddingBottom="10px"
eraserColor.style.backgroundColor = "coral"
eraserColor.style.border = "solid gray .01em"
eraser.appendChild(eraserColor)
eraserColor.addEventListener("click", function(){
console.log(event)
selectedColor = "white"
header.style.backgroundColor = "pink"
mainContainer.style.borderColor = "pink"
chicken.style.color = "pink"
currentColor.style.backgroundColor = "white"

})

//create currentColor
let colorDiv = document.getElementById("colorDiv")
let currentColor = document.createElement("button")
currentColor.style.width = "50px"
currentColor.style.paddingBottom="10px"
currentColor.style.backgroundColor = selectedColor
currentColor.style.border = "solid gray .01em"
colorDiv.appendChild(currentColor)


// Set CanvasSize

let canvasSize = document.querySelector("#canvasSize")
canvasSize.addEventListener("input" , function(){
  console.log("canvasSize.Value:::" , canvasSize.value)

//console.log("dimensions outside::::" , dimensions)


function buildCanvas(dimensions){
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild)
  }

  let rows = dimensions
  let columns = dimensions

    for (let i = 1; i <= rows ; i++){
    let canvasRow = document.createElement("div")
    canvasRow.setAttribute("class" , "row mx-auto delete")
    canvasRow.id=`row${i}`
      for (let j = 1; j <= columns ; j++){
        let tile = document.createElement("div")
        tile.style.width = `${100/dimensions}%`
        tile.style.paddingBottom = `${100/dimensions}%`
        tile.style.float = "left"
        tile.style.backgroundColor = "white"
        tile.style.border= "solid .01em"
        tile.style.borderColor = "gainsboro"
        canvas.appendChild(canvasRow)
        canvasRow.appendChild(tile)
  }
}
}


//
buildCanvas(canvasSize.value)
 })



//Paint Feature!!!
  canvas.addEventListener("click" , function(){
  event.target.style.backgroundColor = selectedColor
  })


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


//Create Control Panel

// let controlRow = document.createElement("div")
// controlRow.setAttribute("class" , "row mx-auto")
// for(let i = 0; i <3; i++){
//   let controlColumn = document.createElement("div")
//   controlColumn.setAttribute("class" , "col-4 mx-auto d-flex justify-contents-center")
//   controlRow.appendChild(controlColumn)
//   mainContainer.appendChild(controlRow)
// }










})

let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let mountains7 = document.getElementById("mountains7")
let harmony = document.querySelector(".harmony")
window.onscroll = function(){
    let value = scrollY
    stars.style.left = value * 2 + "px"
    moon.style.top = value * 4  + "px"
    mountains3.style.top = value * 2 + "px"
    mountains4.style.top = value * 1.5 + "px"
    river.style.top = value + "px"
    boat.style.top = value + "px"
    boat.style.left = value * 2 + "px"
    harmony.style.fontSize = value + "px"
    if(scrollY >= 80){
        harmony.style.fontSize = 80 + "px"
        harmony.style.position = "fixed"
        if(scrollY >= 330){
            harmony.style.display = "none"
        } else{
            harmony.style.display = "block"
        }
        if(scrollY >= 125){
            document.querySelector(".main").style.background = "linear-gradient(#376281, #10001f)"
        }
        else{
            document.querySelector(".main").style.background = "linear-gradient(rgb(42, 0, 31),#10001F)"


        }
    }


}


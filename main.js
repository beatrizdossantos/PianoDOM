const keys = document.querySelectorAll(".key")
console.log(keys)

function playNote(event) {
    console.log(event)
}

window.addEventListener("keydown", playNote)
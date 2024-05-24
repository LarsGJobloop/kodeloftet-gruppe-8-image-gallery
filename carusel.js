// Global Variables
const totalImages = 4

// Functions
function changeImage(offset) {
    console.log("moving to previous image")

    // What is the current image
    let currentImage = getIndexOfCurrentImage()

    setImage(currentImage + offset)
}

function setImage(imageNumber) {
    // Find a list (collection) of all the images
    const images = document.getElementsByClassName("image")
    const imageList = Array.from(images)

    for (let index = 0; index < imageList.length; index++) {
        const image = imageList[index]

        // What is the value of data-current
        const isCurrent = image.dataset.current === "true"

        // Hide the image
        if (isCurrent) {
            image.dataset.current = false
        }

        // If we are at the correct image set it to display
        if (index === imageNumber) {
            image.dataset.current = true
        }
    }
}

// Helper function
function getIndexOfCurrentImage() {
    let currentImage

    const images = document.getElementsByClassName("image")
    const imageList = Array.from(images)

    for (let index = 0; index < imageList.length; index++) {
        const image = imageList[index];

        const isCurrent = image.dataset.current === "true"

        // if iamge is currently display, set the currentImage
        if (isCurrent) {
            console.log("Found display image")
            console.log(image)

            currentImage = index
            break
        }
    }

    return currentImage
}

// Wiring the functions up to buttons
const firstButton = document.getElementById("first-button")
const previousButton = document.getElementById("previous-button")
const nextButton = document.getElementById("next-button")
const lastButton = document.getElementById("last-button")

// Normal function
function funcName(parm1, param2) { /** Logic */ }
// Arrow function / Lambda, anonyme funksjoner
(param1, param2) => { /** Logic */ }

firstButton.addEventListener("click", () => { setImage(0) })
previousButton.addEventListener("click", () => { changeImage(-1) })
nextButton.addEventListener("click", () => { changeImage(1) })
lastButton.addEventListener("click", () => { setImage(totalImages - 1) })

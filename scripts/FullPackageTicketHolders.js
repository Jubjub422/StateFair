import { renderTicketHTML } from "./TicketBooth.js"


const showContentTarget = document.querySelector(".sideshow")
const rideContentTarget = document.querySelector(".rides")
const gameContentTarget = document.querySelector(".games")
const foodContentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullTicketPurchased", CustomEvent => {
        
        showContentTarget.innerHTML += `<div class = "bigSpender"> ' </div>`
        rideContentTarget.innerHTML += `<div class = "bigSpender"> ' </div>`
        gameContentTarget.innerHTML += `<div class = "bigSpender"> ' </div>`
        foodContentTarget.innerHTML += `<div class = "bigSpender"> ' </div>`
        renderTicketHTML()
    }
    )
}


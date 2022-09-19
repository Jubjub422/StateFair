import { renderTicketHTML } from "../TicketBooth.js"
const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", CustomEvent => {
        
        contentTarget.innerHTML += `<div class = "player"> ' </div>`
        renderTicketHTML()
    })
}


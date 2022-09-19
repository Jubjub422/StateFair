import { renderTicketHTML } from "../TicketBooth.js"

const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("showTicketPurchased", CustomEvent => {
        renderTicketHTML()
         
       contentTarget.innerHTML += `<div class = "gawker"> ' </div>`
    })
}


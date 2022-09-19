import { renderTicketHTML } from "../TicketBooth.js"

const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", CustomEvent => {
        renderTicketHTML()
         
       contentTarget.innerHTML += `<div class = "rider"> ' </div>`
    })
}


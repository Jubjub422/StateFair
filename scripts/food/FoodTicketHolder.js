import { renderTicketHTML } from "../TicketBooth.js"

const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", CustomEvent => {
            renderTicketHTML()
       contentTarget.innerHTML += `<div class = "eater"> ' </div>`
    })
}


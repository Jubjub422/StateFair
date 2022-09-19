import { addTicket, renderTicketHTML } from "./TicketBooth.js"

const eventHub = document.querySelector("#state-fair")


const customerTarget = document.querySelector(".customers")



//!responsible for showing how many tickets are purchased at top of site
//* need state variable to change each time a button is clicked

export const ticketsGot = () => {
    eventHub.addEventListener( "ticketPurchased", CustomEvent => {
            addTicket()
            renderTicketHTML()
    }



    )
}
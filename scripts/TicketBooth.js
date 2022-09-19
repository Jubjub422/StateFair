const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "rideTicket") {
            const rideEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(rideEvent)
            // addTicket()
            const ticketPurchase = new CustomEvent("ticketPurchased")
            eventHub.dispatchEvent(ticketPurchase)
        }
    }
)
eventHub.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "foodTicket") {
            const foodEvent = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(foodEvent)
            // addTicket()
            const ticketPurchase = new CustomEvent("ticketPurchased")
            eventHub.dispatchEvent(ticketPurchase)
            
        }
    }
)
eventHub.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "gameTicket") {
            const gameEvent = new CustomEvent("gameTicketPurchased")
            eventHub.dispatchEvent(gameEvent)
            // addTicket()
            const ticketPurchase = new CustomEvent("ticketPurchased")
            eventHub.dispatchEvent(ticketPurchase)
            
        }
    }
)
eventHub.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "showTicket") {
            const showEvent = new CustomEvent("showTicketPurchased")
            eventHub.dispatchEvent(showEvent)
            // addTicket()
            const ticketPurchase = new CustomEvent("ticketPurchased")
            eventHub.dispatchEvent(ticketPurchase)
            
        }
    }
)
eventHub.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "fullTicket") {
            const fullEvent = new CustomEvent("fullTicketPurchased")
            eventHub.dispatchEvent(fullEvent)
            // addTicket()
            const ticketPurchase = new CustomEvent("ticketPurchased")
            eventHub.dispatchEvent(ticketPurchase)
        }
    }
)

export const TicketBooth = () => {
    contentTarget.innerHTML = `
                        <div class="ticketBooth">
                        <button id="rideTicket">Ride Ticket</button>
                        <button id="foodTicket">Food Ticket</button>
                        <button id="gameTicket">Game Ticket</button>
                        <button id="showTicket">Show Ticket</button>
                        <button id="fullTicket">Full Package Ticket</button>
                        </div>
                        `
}
const customerTarget = document.querySelector(".customers")

let tickets = 0
export const addTicket = () => {
    tickets += 1

}



export const renderTicketHTML = () => {
    customerTarget.innerHTML = `Total tickets purchased: ${tickets}`
}

// Import and invoke the ticket booth component function
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { FullPackageTicketHolders } from "./FullPackageTicketHolders.js"
import { GameTicketHolders } from "./games/GameTicketHolders.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js"
import { TicketBooth, renderTicketHTML } from "./TicketBooth.js"
import { ticketsGot } from "./Tickets.js"


TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()
renderTicketHTML()
ticketsGot()
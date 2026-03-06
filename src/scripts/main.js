import { getGuest, getService, getParkAreaService } from "./data.js";

// guests html generate
export const guests = () => {
    let guestHTML = "<ul>"
    for (const guest of getGuest()) {
        guestHTML += `<li>${guest.name}</li>` //removed =data-id
    }
    guestHTML += "</ul>"
    return guestHTML
}

//areas html generate function
const area (areaId) => {
    let areaHTML =""
    
    }
}







import { guestList } from "./guest.js"
import { ServiceList, ParkAreaServiceList } from "./ParkArea.js"


const mainContainer = document.querySelector("#container");

const applicationHTML = `
   <div class="header">
        <div class="logo">LOGO</div>
        <h1>Cider Falls Park</h1>
   </div> <div class="main-layout">
        <div class="park-areas">
            ${ServiceList()}
            ${ParkAreaServiceList()}
        </div>
        <div class="guests">
        <h2>Guest List</h2>
            ${guestList()}
        </div>
    </div>
    <p>
     <footer>
        000-000-0000 | ciderfalls@ciderfalls.park | 1223 Cider Falls Boulevard, Cider Falls, Utah, USA 22990
    </footer></p>
`

mainContainer.innerHTML = applicationHTML;

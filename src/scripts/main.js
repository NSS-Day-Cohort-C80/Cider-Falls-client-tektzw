import {
  getService,
  getParkAreaService,
  getParkArea,
} from "./data.js";
import { guestList } from "./guest.js"
import { ParkAreaServiceList } from "./areas.js"

const areas = getParkArea()
const parkAreaServices = getParkAreaService()
const services = getService()
const guests = guestList()
const parkAreaServiceGet = ParkAreaServiceList()


const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <h1>Cider Falls Park</h1>
    <article class="details">
        <section class="detail--column list details__ParkAreaServiceList">
            <h2></h2>
            ${ParkAreaServiceList()}
        </section>
    </article>

    <article class="guest">
    <section class="detail--column details__guest">
        <h2>Guest List</h2>
        ${guestList()}
    </section></article>
`;

mainContainer.innerHTML = applicationHTML;

const renderParkToDOM = () => {
  document.getElementById("guest").innerHTML = getGuest();
  document.getElementById("area").innerHTML = getParkArea();
  document.getElementById("service").innerHTML = getService();
  document.getElementById("park-area-service").innerHTML = getParkAreaServices();
};
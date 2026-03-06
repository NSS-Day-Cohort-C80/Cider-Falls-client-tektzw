import {
  getGuest,
  getService,
  getParkAreaService,
  getParkArea,
} from "./data.js";

// guests html generate
export const guestList = () => {
  let guestHTML = "<ul>";
  for (const guest of getGuest()) {
    guestHTML += `<li>${guest.name}</li>`;
  }
  guestHTML += "</ul>";
  return guestHTML;
};

//areas html generate function
export const ParkAreaServiceList = () => {
  let parkAreaHTML = "<ul>";
  for (const area of getParkArea()) {
    parkAreaHTML += `<h2>${area.name}</h2>`;
    for (const parkAreaService of getParkAreaService()) {
      let service = getService();
      if (area.id === parkAreaService.parkAreaId) {
        if (getParkAreaService.serviceId === service.id) {
          parkAreaHTML += `
          <li>
           ${service.name} \n
          </li>
        `;
        }
      }
    }
  }
  parkAreaHTML += "</ul>";
  return parkAreaHTML;
};

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

export const renderParkToDOM = () => {
  document.getElementById("guest").innerHTML = getGuest();
  document.getElementById("area").innerHTML = getParkArea();
  document.getElementById("service").innerHTML = getService();
  document.getElementById("park-area-service").innerHTML = getParkAreaService();
};
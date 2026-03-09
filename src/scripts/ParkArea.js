import { getService, getParkAreaService, getParkArea } from "./data.js";

const areas = getParkArea();
const parkAreaServices = getParkAreaService();
const services = getService();

export const ServiceList = () => {
    const spans = services.map(service => 
        `<span data-type="service" data-id="${service.id}">${service.name}</span>`
    )
    return `<p>${spans.join(", ")}</p>`
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "service") {
    const clickService = parseInt(itemClicked.dataset.id);
    let areaNames = "";

    for (const parkAreaService of parkAreaServices) {
      if (parkAreaService.serviceId === clickService) {
        for (const area of areas) {
          if (area.id === parkAreaService.parkAreaId) {
            areaNames += `${area.name}\n`;
          }
        }
      }
    }

    window.alert(`This service is available at:\n${areaNames}`);
  }
});

export const ParkAreaServiceList = () => {
  let parkAreaHTML = "";

  for (const area of areas) {
    parkAreaHTML += `<div class="park-area">`;
    parkAreaHTML += `<h2 data-type="area" data-id="${area.id}">${area.name}</h2>`;
    parkAreaHTML += `<ul>`;
    for (const parkAreaService of parkAreaServices) {
      if (parkAreaService.parkAreaId === area.id) {
        for (const service of services) {
          if (service.id === parkAreaService.serviceId) {
            parkAreaHTML += `<li>${service.name}</li>`;
          }
        }
      }
    }
    parkAreaHTML += `</ul>`;
    parkAreaHTML += `</div>`;
  }

  return parkAreaHTML;
};

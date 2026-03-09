import { getGuest } from "./data.js";

const guests = getGuest()

export const guestList = () => {
  let guestHTML = "<ul>";
  for (const guest of getGuest()) {
    guestHTML += `<li>${guest.name}</li>`;
  }
  guestHTML += "</ul>";
  return guestHTML;
};


const guestCount = (parkAreaId) => {
    let amountOfGuests = 0;
    for (const guest of guests){
        if (guest.parkAreaId === parkAreaId) {
        amountOfGuests++;
        }
    }
        return amountOfGuests;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "area") {
    const howManyGuests = guestCount(parseInt(itemClicked.dataset.id));
    window.alert(`There are ${howManyGuests} guests in this area`);
  }
});

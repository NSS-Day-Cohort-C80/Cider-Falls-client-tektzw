import { getGuest } from "./data.js";


export const guestList = () => {
  let guestHTML = "<ul>";
  for (const guest of getGuest()) {
    guestHTML += `<li>${guest.name}</li>`;
  }
  guestHTML += "</ul>";
  return guestHTML;
};

/* document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "guest") {
    for (const guest of celebrities) {
      if (celebrity.id === parseInt(itemClicked.dataset.id)) {
        window.alert(`${celebrity.name} is a ${celebrity.sport} star`);
      }
    }
  }
});
*/

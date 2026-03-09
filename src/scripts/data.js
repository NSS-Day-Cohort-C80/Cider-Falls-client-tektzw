const database = {
  guest: [
    {
      id: 1,
      name: "Chad Broman",
      parkAreaId: 1,
    },
    {
      id: 2,
      name: "Lucy Hasting",
      parkAreaId: 2,
    },
    {
      id: 3,
      name: "Greg Dupont",
      parkAreaId: 3,
    },
    {
      id: 4,
      name: "Jen Carver",
      parkAreaId: 4,
    },
    {
      id: 5,
      name: "Mike Garvin",
      parkAreaId: 5,
    },
    {
      id: 6,
      name: "Rebecca Cho",
      parkAreaId: 6,
    },
    {
      id: 7,
      name: "Louis Bigg",
      parkAreaId: 1,
    },
    {
      id: 8,
      name: "Betty Grey",
      parkAreaId: 2,
    },
    {
      id: 9,
      name: "Thomas Train",
      parkAreaId: 3,
    },
    {
      id: 10,
      name: "Barb Trainer",
      parkAreaId: 4,
    },
    {
      id: 11,
      name: "Dave Young",
      parkAreaId: 5,
    },
  ],

  parkArea: [
    {
      id: 1,
      name: "Lodge",
    },
    {
      id: 2,
      name: "Lost Wolf Hiking",
    },
    {
      id: 3,
      name: "Chamfort River",
    },
    {
      id: 4,
      name: "Gander River",
    },
    {
      id: 5,
      name: "Campgrounds",
    },
    {
      id: 6,
      name: "Pine Bluff Trails",
    },
  ],

  service: [
    {
      id: 1,
      name: "rafting",
    },
    {
      id: 2,
      name: "canoeing",
    },
    {
      id: 3,
      name: "fishing",
    },
    {
      id: 4,
      name: "hiking",
    },
    {
      id: 5,
      name: "picnicking",
    },
    {
      id: 6,
      name: "rock climbing",
    },
    {
      id: 7,
      name: "zip lines",
    },
    {
      id: 8,
      name: "information",
    },
    {
      id: 9,
      name: "hotel",
    },
    {
      id: 10,
      name: "restaurant",
    },
    {
      id: 11,
      name: "lodging",
    },
    {
      id: 12,
      name: "parking",
    },
    {
      id: 13,
      name: "office park",
    },
    {
      id: 14,
      name: "children's play area",
    },
    {
      id: 15,
      name: "food vendors",
    },
  ],

  parkAreaService: [
    { //parkArea: Lodge
      id: 1,
      parkAreaId: 1,
      serviceId: 11, //lodging
    },
    {
      id: 2,
      parkAreaId: 1,
      serviceId: 12, //parking
    },
    {
      id: 3,
      parkAreaId: 1,
      serviceId: 8, //information
    },
    {
      id: 4,
      parkAreaId: 1,
      serviceId: 5, //picnicking
    },
    {
      id: 5,
      parkAreaId: 1,
      serviceId: 9, //hotel
    },
    {
      id: 6,
      parkAreaId: 1,
      serviceId: 10, //restaurant
    },
    { //parkArea: Lost Wolf Hiking
      id: 7,
      parkAreaId: 2,
      serviceId: 4, //hiking
    },
    {
      id: 8,
      parkAreaId: 2,
      serviceId: 5, //picnicking
    },
    {
      id: 9,
      parkAreaId: 2,
      serviceId: 6, //rock climbing
    },
    { //parkArea: Chamfort River
      id: 10,
      parkAreaId: 3,
      serviceId: 1, //rafting
    },
    {
      id: 11,
      parkAreaId: 3,
      serviceId: 2, //canoeing
    },
    {
      id: 12,
      parkAreaId: 3,
      serviceId: 3, //fishing
    },
    { // parkArea: Gander River
      id: 13,
      parkAreaId: 4,
      serviceId: 3, //fishing
    },
    {
      id: 14,
      parkAreaId: 4,
      serviceId: 4, //hiking
    },
    { //parkArea: Campgrounds
      id: 15,
      parkAreaId: 5,
      serviceId: 8, //information
    },
    {
      id: 16,
      parkAreaId: 5,
      serviceId: 11, //lodging
    },
    {
      id: 17,
      parkAreaId: 5,
      serviceId: 12, //parking
    },
    { 
      id: 24,
      parkAreaId: 5,
      serviceId: 13 //office park
    },

    {
      id: 19,
      parkAreaId: 5,
      serviceId: 14, //childrens play area
    },
    { //parkArea: Pine Bluff Trails
      id: 20,
      parkAreaId: 6,
      serviceId: 4, //hiking
    },
    {
      id: 21,
      parkAreaId: 6,
      serviceId: 5, //picnicking
    },
    {
      id: 22,
      parkAreaId: 6,
      serviceId: 7, //zip lines
    },
    {
      id: 23,
      parkAreaId: 6,
      serviceId: 15, //food vendors
    },
  ],
};

export const getGuest = () => {
  return structuredClone(database.guest);
};

export const getService = () => {
  return structuredClone(database.service);
};

export const getParkAreaService = () => {
  return structuredClone(database.parkAreaService);
};

export const getParkArea = () => {
  return structuredClone(database.parkArea);
};

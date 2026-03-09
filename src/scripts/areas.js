import {
  getService,
  getParkAreaService,
  getParkArea,
} from "./data.js";

const areas = getParkArea()
const parkAreaServices = getParkAreaService()
const services = getService()

const findServiceMatch = (area, services, parkAreaServices) => {
  const matches = []
for (const parkAreaService of parkAreaServices) {
        //grab service name and add to html
        for (const service of services){
          if (parkAreaService.serviceId === service.id && parkAreaService.parkAreaId === area.id){
            matches.push(service)
            
          }
        }
    
    }
        return matches
  }

  export const ParkAreaServiceList = () => {
  let parkAreaHTML = "<ul>";
  for (const area of areas) {
    parkAreaHTML += `<h2 data-type="area" data-id="${area.id}">${area.name}</h2>`;
    const matches = findServiceMatch(area, services, parkAreaServices)
    const serviceName = matches.map((service)=>{
    return `${service.name}`})
          parkAreaHTML += `
           <li>
            ${serviceName} \n
           </li>`;
          
        }
  parkAreaHTML += "</ul>";
    return parkAreaHTML;
};
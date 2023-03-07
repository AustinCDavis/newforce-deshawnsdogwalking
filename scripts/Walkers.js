import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"
const walkers = getWalkers();
const walkerCities = getWalkerCities();
const cities = getCities();


     const filterWalkerCitiesByWalker = (singleWalker) => {
           const assignments = []
            
        for (const assignment of walkerCities) {
          if (assignment.walkerId === singleWalker.id) {
                  assignments.push(assignment)
             }
          }
      return assignments
   }

     const assignedCityNames = (assignments) => {
            let cityNames = []
            
         for (const walkerCityAssignment of assignments) {
            for (const city of cities) {
                if (city.id === walkerCityAssignment.cityId) {
                     cityNames.push(city.name)
                     }
                 }
             }
                return cityNames.join(" and ")
    }

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
      
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("walker")) {

            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)
            
                    window.alert(`${walker.name} services ${cities}`)
                }
                
            }
            
        }
    }
    )
  
    export const Walkers = () => {
        
        let walkerHTML = "<ul>"
        
        for (const walker of walkers) {
            walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}


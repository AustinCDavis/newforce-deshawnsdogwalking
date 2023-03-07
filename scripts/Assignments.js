import { getPets, getWalkers, getWalkerCities, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities();
const cities = getCities();

//Function whose responsibility is to create array of assignments based on walkerId
const filterWalkerCitiesByWalker = (singleWalker) => {
    const assignments = []
     
 for (const assignment of walkerCities) {
   if (assignment.walkerId === singleWalker.id) {
           assignments.push(assignment)
      }
   }
return assignments
}

//Function whose responsibility is to create array of assignment locations based on assignments variable
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

// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        const assignments = filterWalkerCitiesByWalker(currentPetWalker)
        const cities = assignedCityNames(assignments)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${cities}
            </li>
        `
    };

    assignmentHTML += "</ul>"

    return assignmentHTML
}


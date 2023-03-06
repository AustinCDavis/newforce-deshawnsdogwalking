import { getWalkers } from "./database.js"



export const Walkers = () => {
    const walkers = getWalkers()

    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li>${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}


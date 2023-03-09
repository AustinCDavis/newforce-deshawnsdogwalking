import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("star")) {

            const [,starId] = itemClicked.id.split("--")

            for (const celebrity of celebrities) {
                if (celebrity.id === parseInt(starId)) {
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star`)
                }
                
            }
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li id="star--${star.id}">${star.name}</li>`
    }

    html += "</ol>"
    return html
}



import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("kid")) {

            const [,kidId] = itemClicked.id.split("--")

            for (const child of children) {
                if (child.id === parseInt(kidId)) {
                    window.alert(`${child.name}'s wish is ${child.wish}`)
                }
                
            }
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const kid of children) {
        html += `<li id="kid--${kid.id}">${kid.name}</li>`
    }

    html += "</ol>"
    return html
}



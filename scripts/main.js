import { GamerGab } from "./GamerGab.js"


const container = document.querySelector("#container")

const render = () => {
  container.innerHTML = GamerGab()
}

render()

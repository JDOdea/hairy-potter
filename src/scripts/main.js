// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 4, 3)
let platter = makePottery("Platter", 2, 1)
let plate = makePottery("Plate", 2, 1)
let vase = makePottery("Vase", 7, 5)
let jar = makePottery("Jar", 6, 3)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2300)
let firedPlatter = firePottery(platter, 2400)
let firedPlate = firePottery(plate, 2200)
let firedVase = firePottery(vase, 2100)
let firedJar = firePottery(jar, 2100)

// Determine which ones should be sold, and their price
let catalogMug = toSellOrNotToSell(firedMug)
let catalogPlatter = toSellOrNotToSell(firedPlatter)
let catalogPlate = toSellOrNotToSell(firedPlate)
let catalogVase = toSellOrNotToSell(firedVase)
let catalogJar = toSellOrNotToSell(firedJar)


console.log(catalogMug)
console.log(catalogPlatter)
console.log(catalogPlate)
console.log(catalogVase)
console.log(catalogJar)

// Invoke the component function that renders the HTML list




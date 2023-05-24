// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 4, 3)
let platter = makePottery("Platter", 2, 1)
let plate = makePottery("Plate", 2, 1)
let vase = makePottery("Vase", 4, 5)
let jar = makePottery("Jar", 3, 3)



// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2300)
let firedPlatter = firePottery(platter, 2100)
let firedPlate = firePottery(plate, 2200)
let firedVase = firePottery(vase, 2300)
let firedJar = firePottery(jar, 2400)

console.log(firedMug)
console.log(firedPlatter)
console.log(firedPlate)
console.log(firedVase)
console.log(firedJar)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list




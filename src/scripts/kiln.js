//Define and export a function named firePottery that is responsible for acting as a kiln.

/* 
    Function accepts the following values as input
        i. An object representing a piece of pottery that was made at the wheel in the makePottery function
        ii. A number specifying the firing temperature of the kiln

    Add a new property of 'fired' with the value of 'true' to the object
    Add a new property of 'cracked' to the object
        i. If the temp of the kiln is above 2200 degrees then 'cracked' property must be 'true'
        ii. If the temp of the kiln is at, or below, 2200 degrees then 'cracked' must be 'false'
    Return the augmented object
*/

export const firePottery = (pottery, temp) => {
    pottery.fired = true

    if (temp > 2200) {
        pottery.cracked = true
    }
    else {
        pottery.cracked = false
    }

    return pottery
}
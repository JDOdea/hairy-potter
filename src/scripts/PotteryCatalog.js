/* 
    Define a variable in the module with a value of an empty array. 
    This array will store pottery that will be sold. Do not export this array.

    Define and export a function named toSellOrNotToSell that is responsible for determining if a piece of pottery should be sold.

    Define and export a function named usePottery
*/

const catalog = []

/* toSellOrNotToSell 
    Function must accept a pottery object as input
        If the weight of the piece of pottery >= 6 then add price property with a value of 40
        If the weight of the piece of pottery < 6 then add price property with a value of 20
        If the piece of pottery is cracked, do not add a price property
        If the piece of pottery is not cracked, add the object to the module-level array of items to be sold
    Return the augmented object
*/
export const toSellOrNotToSell = (pottery) => {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40
        }
        else {
            pottery.price = 20
        }

    catalog.push(pottery)
    }

    return pottery
}

/* usePottery
    Function returns a copy of the array of items to be sold
*/
export const usePottery = () => {
    return structuredClone(catalog)
}
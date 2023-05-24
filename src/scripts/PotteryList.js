//Define and export a PotteryList function.

/* PotteryList
    Function must get the items to be sold from the PotteryCatalog.js module
    Function must convert each object in the array to an HTML representation string

        Use the following template to generate the representations

        <section class="pottery" id="pottery--1">
            <h2 class="pottery__shape">Mug</h2>
            <div class="pottery__properties">
                Item weighs 3 grams and is 6 cm in height
            </div>
            <div class="pottery__price">Price is $20</div>
        </section>

    
    Function must return a single string that contains ALL of the pottery HTML representation
*/

export const PotteryList = (catalog) => {
    let HTMLString = ""

    //Iterate through catalog array
    for (const pottery of catalog) {
        HTMLString += `<section class="pottery" id="pottery--${pottery.id}">\n`
        HTMLString += `\t<h2 class="pottery__shape">${pottery.shape}</h2>\n`
        HTMLString += `\t<div class="pottery__properties">\n`
        HTMLString += `\t\tItem wighs ${pottery.weight} grams and is ${pottery.height} cm in height\n`
        HTMLString += `\t</div>\n`
        HTMLString += `\t<div class="pottery__price"Price is $${pottery.price}</div>\n`
        HTMLString += `</section>\n`
    }
    return HTMLString
}
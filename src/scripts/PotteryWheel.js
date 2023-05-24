
/* 
    Define a variable in the module to have the value of the primary key for each piece of pottery. 
    It should have an initial value of 1.
*/

let potterKey = 1

/* 
    Function creates and returns an object with the following properties
        i. shape
        ii. weight
        iii. height
        iv. id (increment this value each time the function is invoked)

    Takes the following as inputs
        i. Shape of the piece of pottery (e.g. "Mug", "Platter")
        ii. Weight of the piece (e.g. 1, 5)
        iii. Height of the piece (e.g. 3, 7)
*/
export const makePottery = (shape, weight, height) => {
    let id = 1
    const potter = {
        shape: shape,
        weight: weight,
        height: height,
        id: potterKey
    }
    potterKey++

    return potter
}
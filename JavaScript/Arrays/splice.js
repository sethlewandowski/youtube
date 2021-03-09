// modifies original array
// add or remove elements from array
// first arg is indes of starting place
// second arg is how many items to remove (returns removed items)
// third+ arg is what to add

// array.splice([starting], [#OfItemsToRevove], [item to add], [item to add])

const toppings = ['pepperoni', 'mushrooms', 'pineapple']

const removedItem = toppings.splice(1, 1, 'olives')

const emptyVar = toppings.splice(1, 0, removedItem)

console.log(toppings)
console.log(emptyVar)
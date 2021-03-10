// Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// Use map when you want to create a new array with modified data

const myPlaces = [
  { name: "place1", type: "bar", active: false, likes: 22 },
  { name: "place2", type: "restaurant", active: true, likes: 10 },
  { name: "place3", type: "gym", active: false, likes: 2 },
  { name: "place4", type: "mall", active: true, likes: 33 },
  { name: "place5", type: "cafe", active: true, likes: 0 },
]

const simpleList = myPlaces.map((place) => {
  place.name, place.type
})
console.log(simpleList)

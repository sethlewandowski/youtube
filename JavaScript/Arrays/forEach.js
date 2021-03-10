// Array.prototype.forEach()
// The forEach() method executes a provided function once for each array element.
// Use forEach() when you simply need to DO SOMETHING with the data

const myPlaces = [
  { name: "place1", type: "bar", active: false, likes: 22 },
  { name: "place2", type: "restaurant", active: true, likes: 10 },
  { name: "place3", type: "gym", active: false, likes: 2 },
  { name: "place4", type: "mall", active: true, likes: 33 },
  { name: "place5", type: "cafe", active: true, likes: 0 },
]

myPlaces.forEach((place) => console.log(place.name))

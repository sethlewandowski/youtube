// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const myPlaces = [
  { name: "place1", type: "bar", active: false },
  { name: "place2", type: "restaurant", active: true },
  { name: "place3", type: "gym", active: false },
  { name: "place4", type: "mall", active: true },
  { name: "place5", type: "cafe", active: true },
]

const homeScreenOutput = myPlaces.filter(
  (place) => place.active && place.type === "cafe"
)
console.log(homeScreenOutput)

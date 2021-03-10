//Array.prototype.indexOf()
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const myPlaces = [
  { name: "place1", type: "bar", active: false, likes: 22 },
  { name: "place2", type: "restaurant", active: true, likes: 10 },
  { name: "place3", type: "gym", active: false, likes: 2 },
  { name: "place4", type: "mall", active: true, likes: 33 },
  { name: "place5", type: "cafe", active: true, likes: 0 },
]

console.log(myPlaces.indexOf({ likes: 0 }))

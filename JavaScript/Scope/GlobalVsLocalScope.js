let myName = 'Seth' // global
let myOS = 'Linux' // global

function myInfo() {
  let myFavoriteSnack = 'Popcorn' // local
  console.log(`${myName} is using the ${myOS} operating system.`) // access global
}

myInfo()
console.log(myFavoriteSnack) // global scope

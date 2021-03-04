{
  // outer block
  let dineIn = { status: 'open' }
  let carryOut = dineIn
  console.log(dineIn)
  console.log(carryOut)
  carryOut.status = 'closed'
  console.log(dineIn)
  let city = 'New York City'
  {
    // inside block
    dineIn = 'pizza' // masking
    carryOut.status = 'covid'
  }
  console.log(dineIn.status)
  console.log(carryOut.status)
}

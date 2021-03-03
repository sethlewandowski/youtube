// bind allows us to permanently associate a value for this with a function.

const MANAGERS_SPECIAL = {
  size: 12,
  type: 'Meat Lovers',
  dough: 'Wheat',
  side: 'Ranch',
  price: 14,
  orderUp() {
    return `New Order: ${this.size}in ${this.type} pizza on ${this.dough}.`
  },
}

console.log(MANAGERS_SPECIAL.orderUp())

const SALLYS_FAVORITE = MANAGERS_SPECIAL.orderUp

console.log(SALLYS_FAVORITE())

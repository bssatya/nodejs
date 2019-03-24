//  Object property shorthand
const name = 'Satya'
const age = '39'

const user = {
    name,
    age,
    location: 'Bangalore'
}

console.log(user)

//  Object Destructuring
const product = {
    label: "Red notebook",
    price: 3,
    stock: 200,
    saleProce: undefined,
}

// const {label:productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock, rating = 5.0 }) => {
    console.log('label', label)
    console.log('stock', stock)
    console.log('rating', rating)
}

transaction('buy', product)
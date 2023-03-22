const productStore = {
  products: [],
  cantidad: 0
}

/**
 *
 * @param {Product} product
 */
function setProduct (product) {
  productStore.products.push(product)
  productStore.cantidad = productStore.products.length
}

function getProducts () {
  return [...productStore.products] // Shallow clone
  // return structuredClone(productStore.products)  // Deep clone
}

// eslint-disable-next-line no-unused-vars
function getProduct (id) {
  throw new Error('No implementado')
}

function getCantidad () {
  return productStore.cantidad
}

export {
  getCantidad,
  getProducts,
  setProduct
}

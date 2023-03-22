const productStore = {
  products: []
}

/**
 *
 * @param {Product} product
 */
function setProduct (product) {
  productStore.products.push(product)
}

function getProducts () {
  return [...productStore.products]
  // return structuredClone(productStore.products)
}

export {
  getProducts,
  setProduct
}

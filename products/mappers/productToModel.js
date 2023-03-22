import { Product } from '../models/Product.js'

export function productToModel (data) {
  const {
    id,
    nombre,
    precio
  } = data

  return new Product({ id, productName: nombre, productPrice: precio })
}

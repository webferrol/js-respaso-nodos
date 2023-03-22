/**
 * Clase Producto
 */
export class Product {
  #id
  productName
  productPrice

  /**
   * Método constructor
   * @param {Like<Product>} Product
   * @param {string} Product.id Required
   * @param {string} Product.productName
   * @param {number} Product.productPrice Admite decimales
   */
  constructor ({
    id,
    productName = 'Sin nombre',
    productPrice = 0
  }) {
    if (!id) throw new Error('El argumento id es obligatorio')
    this.#id = id
    this.productName = productName
    this.productPrice = productPrice
  }

  getData () {
    return {
      ...this,
      codigo: this.#id
    }
  }
}

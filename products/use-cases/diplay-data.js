import { getProducts, getCantidad } from '../store/index.js'

/**
 * Renderizamos la lista de productos
 * @param {HTMLElement} tbodyElement
 */
export function displayData (tbodyElement) {
  const productos = getProducts()

  const trValue = productos.map(product => {
    return `
    <tr>
      <td>${product.productName}</td>
      <td>${product.productPrice} €</td>
    </tr>`
  })
  tbodyElement.innerHTML = trValue.join('')
  document.querySelector('.tabla_inventario tfoot tr th').innerHTML = `No incluye I.V.A. Canditad: ${getCantidad()}`
}

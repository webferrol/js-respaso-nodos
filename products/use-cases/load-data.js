import { uuidv4 } from '../helpers/get-uuid.js'
import { productToModel } from '../mappers/productToModel.js'
import { setProduct } from '../store/index.js'
/**
 * Cargando datos del formulario al model Producto
 * @param {Like<HTMLFormElement>} form
 * @param {Like<HTMLInputElement>} form.nombre
 * @param {Like<HTMLInputElement>} form.precio
 */
export function loadData ({ nombre, precio }) {
  const data = {
    id: uuidv4(),
    nombre: nombre.value.trim(),
    precio: Number(precio.value.replace(/€/, ''))
  }

  const p = productToModel(data)
  setProduct(p)
}

import { loadData } from './use-cases/load-data.js'
import { displayData } from './use-cases/diplay-data.js'

/**
 * Gestión del formualario. Evitar que el formulario se envíe
 * @param {HTMLFormElement} element
 */
function handleForm (element) {
  element.addEventListener('submit', e => {
    e.preventDefault()
    loadData(element)
    const tbody = element.closest('.principal').querySelector('#tbody')
    if (!tbody) throw new Error('Elemento tbody no existente')
    displayData(tbody)
  })
}

/**
 * Entry point de la app
 * @param {HTMLElement} element Nodo principal Main
 */
export function nodeApp (element) {
  displayData(element.querySelector('#tbody'))
  handleForm(element.querySelector('#formulario'))
}

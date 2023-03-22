import { loadData } from './use-cases/load-data.js'

/**
 * Gestión del formualario. Evitar que el formulario se envíe
 * @param {HTMLFormElement} element
 */
function handleForm (element) {
  element.addEventListener('submit', e => {
    e.preventDefault()
    loadData(element)
  })
}

/**
 * Entry point de la app
 * @param {HTMLElement} element Nodo principal
 */
export function nodeApp (element) {
  handleForm(element.querySelector('#formulario'))
}

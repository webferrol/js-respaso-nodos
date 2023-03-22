import { Product } from '../../../products/models/Product.js'

describe('Testeo del modelo Producto', () => {

  test('Debería mostrar un error si instancio Product sin argumentos', () => {
    // console.log(new Product())
    const testeoProducto = () => {
      new Product()
    }
    expect(testeoProducto).toThrow("Cannot destructure property 'id'")
  })

  test('Comprobar que hay un error si no paso el id como arguemento', () => {
    const data = { productPrice: 12.5 }
    const testeoProducto = () => {
      new Product(data)
    }
    expect(testeoProducto).toThrow('El argumento id es obligatorio')
  })

  test('Quiero ver la salidada correcta de getData()', () => {
    const data = { id: 1, productName: 'tomates' }
    const p = new Product(data)
    const salida = { codigo: 1, productName: 'tomates', productPrice: 0 }
    expect(p.getData()).toEqual(salida)
  })

})

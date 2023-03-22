'use strict'

import { nodeApp } from './products/nodes-app.js'

const main = document.querySelector('.principal')
if (!main) throw new Error('Elemento raíz no encontrado')

nodeApp(main)

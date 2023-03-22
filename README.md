# Jest
## Documentación oficial

[jest](https://jestjs.io/es-ES/)

  Los enlaces que vienen abajo hacen referencia a __jest javascript__ y __react__. Selecciona las instalaciones que te hagan falta.

## Instalaciones

1. Instalaciones:
```
npm intall -D jest babel-jest @babel/preset-env
npm intall -D @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
npm intall -D whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ]
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```


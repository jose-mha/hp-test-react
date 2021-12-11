# `Instalación`
Instalamos las dependencias necesarias para poder iniciar el proyecto
```bash
npm install
```

# `Scripts`
## Iniciar Projecto
Con el siguiente comando compilamos y ejecutamos nuestro proyecto
```bash
npm start
```
Una vez termine de compilar podrás ver el proyecto en http://localhost:3000
### Fake API
Inicia una API de ejemplo con json-server
```bash
npm run start-api
```
Es primordial que se esté ejecutando la API para que nuestro proyecto pueda funcionar correctamente de acuerdo a las funcionalidades principales.
Después de ingresar el comando podrás acceder al API así como también los endpoints que son accesibles
- http://localhost:5000
- http://localhost:5000/characters
- http://localhost:5000/gryffindor
- http://localhost:5000/staff
- http://localhost:5000/students
## Tests
Con el siguiente comando inicia las pruebas unitarias que se crearon de acuerdo a las principales funcionalidades del proyecto
```bash
npm run start-api
```
La salida del resultado de las pruebas se mostrara de la siguiente manera
```bash
PASS  src/tests/Actions.test.js
PASS  src/tests/Reducers.test.js
PASS  src/tests/AppService.test.js
PASS  src/tests/App.test.js

Test Suites: 4 passed, 4 total
Tests:       8 passed, 8 total
Snapshots:   0 total
```

## Retrospectiva
----
##### ¿Qué es lo que más te gustó de tu desarrollo?
- Me gusto poder practicar mis habilidades de front con react ya que no había tenido la oportunidad de practicar a fondo con esta librería, como hasta este momento. En cierto modo había como que no conocía tan bien, solamente lo básico, pero tuve la oportunidad de reforzar mi conocimiento durante este tiempo.
##### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
- Me hubiera gustado poder mejorar en la parte de la maquetación así como tal cual se muestra en look & feel que nos proporcionaron, así como también algunas pequeñas mejoras en la parte mobile.
- Uno de los temas que trataría sería el poder crear alguna api aparte de la de ejemplo que se usó en este desarrollo, para que así me permitiera poder guardar imágenes de manera más sencilla
- Y otro tema que también podría haber mejorado seria la parte del código bien estructurado, ya que con el tiempo que se establecido para la prueba solamente pude estructurar bien una parte del código.
##### Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste
- Tuve el inconveniente de los estilos en ciertas partes de los componentes, al principio solo maquete todo de manera estática, y posteriormente ya que se consumían los servicios al api, los componentes ya con la información se movían o se juntaban, en cierto modo al terminar una funcionalidad me dedicaba a solucionar los fallos en los estilos tanto  desktop como mobile.
- Como no tenía otro recurso que pudiera almacenar imágenes de manera más directa, deje en pausa esa funcionalidad, para que posteriormente realice con más calma el recurso mencionado y así poder finalizar dicha funcionalidad.

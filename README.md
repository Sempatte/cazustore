# CazuStore

CazuStore es una tienda 100% online dedicada a la venta de componentes, computadoras y laptops, ubicada en la ciudad de Lima en el Perú.

## Instalación de los paquetes

Utiliza el [npm](hhttps://www.npmjs.com/) para instalar los paquetes requeridos.

```bash
npm i
```

## Información acerca de este proyecto:

Consiste en la implementación de un e-Commerce con ReactJS, asimismo, haciendo uso de librerías tales como ReactIcons, ReactHooks, ReactRouter, entre otros. En este proyecto, se pondrá en práctica todo lo aprendido durante todas las sesiones de CoderHouse.

## Rutas
- **Ruta Main ("/"):** Encargada de renderizar y proveer al usuario la lista de todos los productos existentes en la base de datos.
- **Ruta Home ("/home"):** Encargada de renderizar y mostrar información básica sobre la página al cliente o al espectador.
- **Ruta Products ("/products"):** Al igual que la ruta Main, esta se encarga de mostrar todos los productos en forma de tarjetas.
- **Ruta Cart ("/cart"):** Encargada de mostrar el carrito con los productos añadidos por el usuario, este renderiza un aviso de `No hay productos` en caso el usuario no haya añadido ningún producto.
- **Ruta Brand ("/brand/:brandName"):** Encargada de filtrar por Marcas los productos, esta será manejada desde el NavBar de la interfaz.
- **Ruta Category ("/category/:categoryName"):** Encargada de filtrar por categorías los productos, de igual modo, stá será manejada desde el NavBar.
- **Ruta Item ("/item/:productId"):** Encargada de renderizar el botón para agregar al carrito, junto con los detalles disponibles del producto elegido, tales como el  nombre, descripción, stock, precio, color o modelos, etc. Una vez el usuario haya agregado el producto al carrito, se le mostrará un botón el cual al hacer click lo redireccionará al carrito.
- **Ruta Order ("/order/:orderID"):** Encargada de mostrar el botón “Agregar al carrito” y, los detalles disponibles del producto elegido tales como: nombre, descripción, stock, precio, color/modelos, etc. Una vez el usuario haya agregado el producto al carrito, se le mostrará un botón en el cual pueda hacer click y seguidamente lo redireccione al carrito.

## Librerias
- [React Boostrap](https://react-bootstrap.github.io/): Se implementó esta librería para el manejo de la interfaz de usuario de la página, tales como el NavBar, las tarjetas de los ítems, el carrito, etc.
- [EmailJS](https://www.emailjs.com/): Esta librería se encarga de enviar detalles de la orden luego de que el usuario haya culminado con la compra. Se le enviará toda la información al correo antes proporcionado del cliente.
- [Firebase](https://firebase.google.com/): Se hizo uso de esta librería para el manejo de la Base de Datos. Esta librería es de vital uso, puesto que sin ella, no tendríamos donde alojar información sobre los productos y las órdenes.
- [Order ID](https://www.npmjs.com/package/order-id): Esta libreria se encarga de generar los numeros de orden automáticamente, que posteriormente servirá para hacerle un seguimiento a la orden. Este identificador irá a la Base de Datos en su respectiva orden.
- [React Icons](https://react-icons.github.io/react-icons/): Se implementó esta librería para el renderizado de íconos dentro de la página.

## Requisitos Pro-Coders
- **Custom Item:** Se agregó la posibilidad de que cada producto tenga 1 o más opciones por elegir, como por ejemplo, el modelo, el color o la capacidad.
- **Cart Persistente:** Se elaboró un CustomHook (customHooks/useLocalStorage.js) para conseguir que el Carrito de Compras sea persistente, haciendo vital uso de LocalStorage.
- **Mis ordenes:** El cliente luego de haber realizado una compra, puede volver a ver el detalle de su orden con el ID que se le proporciono. Asimismo, se le envía un link al correo del cliente donde lo redireccionara hacia un apartado el cual contiene los detalles respectivos de su orden, ocultando sus datos personales. Se reutilizara el componente **<OrderDetails/>**

## Desarrollado con:

- [Visual Studio Code](https://code.visualstudio.com/)
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React-Router](https://reactrouter.com/docs/en/v6/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

#### Desarrollador: Sebastián De la Torre Aspilcueta
#### [Linkedin](https://www.linkedin.com/in/sebastian-de-la-torre-aspilcueta-6b9364184/) 
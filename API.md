
# Virtual Vinilo API Rest
The Virtual Vinilo API is a API develop by four guys in their fourth year of degree in Software Engineering at URJC in Madrid, Spain.
This API have tons of information about our users, orders, products, analitycs and much more.
In order to test this API, you need to follow a simple steps to work with it.
## Basic Usage
First, all you have to do is download Postman on https://www.getpostman.com/ or on the Chrome Web Store, an free app provided by Google to test APIs.
Then, you have to change to GET/PUT/POST/DELETE method in methods bar and put there a url provided in this documentation.
## URLs with GET method (Get elements by parameters)
#### GET Resources
* Get all the resources: https://localhost:8443/api/resources/articulo/
* Get one single resource: https://localhost:8443/api/resources/articulo/id 
* Get one single resource from admin page: https://localhost:8443/api/resources/administrador/articulo/id
#### GET Sales
* Get all the sales: https://localhost:8443/api/ofertas/oferta 
* Get one single sale by code: https://localhost:8443/api/ofertas/oferta/code
* Get all the sales by code: https://localhost:8443/api/ofertas/code 
* Get one single sale by id: https://localhost:8443/api/ofertas/id
#### GET Users
* Get one user by name: https://localhost:8443/api/miperfil/name
* Get one user by name: https://localhost:8443/api/miperfil/id
#### GET Checkout orders
* Get all orders in checkout: https://localhost:8443/api/purchaseOrder/all
* Get an order in checkout by title: https://localhost:8443/api/purchaseOrder/title
* Get an order in checkout by id: https://localhost:8443/api/purchaseOrder/id
* Get an order in checkout by singer: https://localhost:8443/api/purchaseOrder/interprete
## URLs with POST method (Add new element)
#### POST Resources
* Post all the resources: https://localhost:8443/api/resources
#### POST Sales
* Post all the sales: https://localhost:8443/api/ofertas/oferta
* Post all the sales: https://localhost:8443/api/ofertas
#### POST Checkout orders
* Add one purchase order to checkout: https://localhost:8443/api/purchaseOrder/
## URLs with PUT method (Modify an element)
#### PUT Sales
* Put one single sale: https://localhost:8443/api/ofertas/oferta/code
* Put one single sale: https://localhost:8443/api/ofertas/oferta/id
#### PUT Users
* Put one user: https://localhost:8443/api/miperfil/id
#### PUT Checkout orders
* Put an order in checkout: https://localhost:8443/api/purchaseOrder/id
## URLs with DELETE method (Delete an element)
#### DELETE Sales
* Delete one single sale by code: https://localhost:8443/api/ofertas/oferta/code
* Delete one single sale by id: https://localhost:8443/api/ofertas/oferta/id
* Delete one single sale by code: https://localhost:8443/api/ofertas/code
#### DELETE Resources
* Delete one single resource: https://localhost:8443/api/resources/articulo/id
#### DELETE Users
* Put one user: https://localhost:8443/api/miperfil/id
#### DELETE Checkout orders
* Delete all orders in checkout: https://localhost:8443/api/purchaseOrder/interprete
* Delete one order in checkout by id: https://localhost:8443/api/purchaseOrder/id
* Delete one order in checkout by code: https://localhost:8443/api/purchaseOrder/code
## Examples
* For example you can user https://localhost:8443/api/resources/articulo/23 to get the resource with id number 23 and the output in J format is 
```
{
  "id": 23,
  "title": "Boys and Girls",
  "subtitle": "¡El último!",
  "interprete": "Steve Ferry",
  "fecha": "2001",
  "estado": "Nuevo",
  "album": "Invincible",
  "precio": 32,
  "codigo": 6,
  "tracklist": "vfd",
  "img": "img21.jpg",
  "visto": false,
  "veces": 0
}
```

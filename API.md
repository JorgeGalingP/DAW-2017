
# Virtual Vinilo API Rest
The Virtual Vinilo API is a API develop by four guys in their fourth year of degree in Software Engineering at URJC in Madrid, Spain.
This API have tons of information about our users, orders, products, analitycs and much more.
In order to test this API, you need to follow a simple steps to work with it.
## Basic Usage
First, all you have to do is download Postman on https://www.getpostman.com/ or on the Chrome Web Store, an free app provided by Google to test APIs.
Then, you have to change to GET method in methods bar and put there a url provided in this documentation.
## URLs with GET method
#### GET Resources
* Get all the resources: https://localhost:8443/api/resources/articulo/
* Get one single resource: https://localhost:8443/api/resources/articulo/id for example  https://localhost:8443/api/resources/articulo/1 to get the resource with id number 1
* https://localhost:8443/api/resources/administrador/articulo/id
#### GET Sales
* Get all the sales: https://localhost:8443/api/ofertas/oferta 
* Get one single sale by code: https://localhost:8443/api/ofertas/oferta/code
* Get all the sales by code: https://localhost:8443/api/ofertas/code 
* Get one single sale by id: https://localhost:8443/api/ofertas/id
#### GET Users
* https://localhost:8443/api/miperfil/name
* https://localhost:8443/api/miperfil/id
## URLs with POST method
* Post all the sales: https://localhost:8443/api/ofertas/oferta
## URLs with PUT method
* Put one single sale: https://localhost:8443/api/ofertas/oferta/code
* Put one user: https://localhost:8443/api/miperfil/id
## Examples

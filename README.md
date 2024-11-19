#Temas Teoricos importantes

##JSON
es un formato de texto que se utiliza para almacenar e intercambiar datos 
de manera que sean legibles por humanos y analizables por máquinas. Significa
JavaScript Object Notationo en ingles JavaScript Object Notation.

##programación asíncrona
conjunto de herramientas necesarias para lograr escribir código que no va a 
seguir el orden o secuencia natural. Esto se puede hacer debido a que 
Javascript es un lenguaje asincrono independientemente de que sea mono-hilo.

###Callbacks de Javascript
es una función que se pasa como parámetro a otra función y se invoca o 
"llama de vuelta" en algún punto dentro de la función que la recibe.
Es una forma de asegurar cierto código no se ejecute hasta que otro código 
haya terminado de ejecutarse.
```
const funcionPrincipal = (parametro, callback) => {
    console.log("Ejecutando la función principal con:", parametro);
    callback(parametro);
};

const miCallback = (dato) => {
    console.log("Este es el callback recibiendo:", dato);
};

// Llamada a la función principal con el callback
funcionPrincipal("Hola, Arrow Functions!", miCallback);
```

###Promesas en Javascript
Es el objeto que representa la respuesta de una tarea asíncrona, 
no es posible saber cuándo terminará y se obtendrá su resultado.
Las promesas reciben dos parametros que son:
*resolve: es una funcion que tiene el objeto que devolvera el código cuando 
tuvo el resultado que esperamos.
*reject: es una funcion que tiene el objeto que devolvera si existe un
error en el código asincrónico.

Para controlar las promesas es que se utilizan los metodos then y catch.
Donde en then() va el resultado exitoso y en catch() el error.

```
const miPromesa = (exito) => {
    return new Promise((resolve, reject) => {
        if (exito) {
            resolve("La operación fue exitosa.");
        } else {
            reject("Hubo un error en la operación.");
        }
    });
};

// Uso de la promesa
miPromesa(true)
    .then((mensaje) => {
        console.log("Promesa resuelta:", mensaje);
    })
    .catch((error) => {
        console.log("Promesa rechazada:", error);
    });
```

####Estados de las promesas
*Pendiente: Es su estado inicial, no se ha cumplido ni rechazado. 
*Cumplida: se ha resuelto satisfactoriamente. 
*Rechazada: se ha completado con un error. 
*Arreglada: ya no está pendiente. O se ha cumplido, se ha rechazado.

###Metodo Fetch
Es una funcion que permite hacer una petición a un API y es justamente 
un callback. Por lo que tenemos que recibirlo usando then y catch. Se
pueden encadenar métodos then, solo cuando el return del then anterior 
es una promesa

```
let pokemones = fetch("https://pokeapi.co/api/v2/pokemon/1"); 
pokemones     
.then(res => { return res.json()     
})
.then(data => { console.log(data.name);     
}).catch(error => console.log(error))
```

###async y await
el async se usa en una función que se encontrara el await, pausando la 
ejecución hasta que una promesa se resuelva o rechace, haciendo que el código 
parezca sincrónico.
await se usa para esperar a que una promesa se resuelva o rechace y hace que
se pause la ejecución de la funcion hasta que se resuelva la promesa y luego
se devolvera el resultado.

##ORM
Object Relational Mapping o Mapeo Objeto-Relacional es una técnica que nos 
permite crear un "puente" entre las entidades del modelo de negocios de 
nuestro programa y el esquema de la base de datos relacional. Para esto 
utilizaremos frameworks.

###Sequelize
es un ORM Typescript y Node.js basado en promesas para para muchas BD, para
eso vamos a tener que instalar las dependencias en nuestro proyecto y tambien
conenctarla con la base de datos.

##API
Significa interfaz de programación de aplicaciones, es la interfaz pública de 
un componente que permite comunicarse con él para hacer uso del mismo. O 
tambien una interfaz de servicio expuesta a través del protocolo HTTP.

El propósito de una API es intercambiar datos entre diferentes sistemas.

Las RESTFul API funcionan bajo una arquitectura cliente servidor, usando HTTP, 
que es un protocolo de comunicación utilizado en la web para la transferencia 
de datos entre diferentes dispositivos y servidores. Utiliza un formato de 
mensaje simple que consta de una cabecera y un cuerpo.

La API RESTful es una interfaz que dos sistemas de computación utilizan para
intercambiar información de manera segura a través de una arquitectura Rest.

###Metodos HTTP de las APIs
*GET sirve para obtener un un recurso o coleccion de recursos.
*POST sirve para crear un recurso o varios recursos(coleccion).
*PUT sirve para actualizar todos los atributos de un recurso o una coleccion.
*PATCH similar al put, solo que actualiza algunos recursos nomas.
*DELETE sirve para borrar un recurso o una coleccion de recursos.

##Express
es un framework de desarrollo web para Node.js que proporciona una 
arquitectura de aplicaciones web minimalista y flexible, como asi tambien
APIs de manera rápida y sencilla.

Tiene una serie de funciones para facilitar el enrutamiento del servidor,la 
gestion de los metodos HTTP y integración de middleware (software intermedio).

Express utiliza un callback cuyos parametros son req(request o solicitud) y
res(response o respuesta). El req es la solicitud HTTP que hacemos y res es
la respuesta HTTP que obtenemos.

```
app.{METHOD}(PATH, HANDLER);
app.get('/articulos', (req, res) => {   
res.send('buscando articulo!'); 
});
```

si en lugar de usar un un metodo/verbo especifico, usamos la funcion use, 
ej App.use(ruta, funcionControlador), respondera a todos los metodos/verbos.

##CORS (Cross-Origin Resource Sharing)
es una política a nivel de navegador web que se aplica para prevenir que el
dominio determinado acceda a recursos de otro dominio usando solicitudes del
tipo AJAX como cuando usamos fetch() o cualquier librería como por ej Axios.

En español significa intercambio de recursos entre orígenes, por ejemplo si
tenemos dos carpetas y queremos que una carpeta pueda permitr que otros 
dominios accedan a su recursos es que utilizaremos cors.

##Middleware
tiene como propósito tomar dos piezas de la aplicación y conectarlas 
intercambiando información entre ellas. Son utilizados para validar la 
información antes de que llegue al cliente, para hacer una consulta.

Tienen la siguiente estructura: function(req,res,next){ … }. El next es una 
función que contiene el próximo middleware o función que va a ejecutar luego 
de que la actual termine su ejecución.


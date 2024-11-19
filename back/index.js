// importacion del modulo express y del modulo cors, como asi tambien
// de los modulos de rutas creados (proveedores)
import express from "express";
import cors from "cors";
import routerProeveedores from "./routes/proveedores.js";
//import routerSeguridad from "./routes/seguridad.js";
import { inicializarDB } from "./base-orm/sqlite-init.js";

// crear servidor con express 
const app = express()

// para poder leer json en el body
app.use(express.json())
app.use( cors())

// usar la ruta de proveedores
app.use(routerProeveedores)
//app.use(routerSeguridad)

// controlar ruta
app.get("/", (req, res) => {
  res.send("dds-backend iniciado!");
})

// Inicializar la base de datos y luego levantar el servidor
const iniciarServidor = async () => {
  try {
    await inicializarDB(); // Inicializa la base de datos
    const port = process.env.PORT || 4000
    app.locals.fechaInicio = new Date()
    app.listen(port, () => {
      console.log(`sitio escuchando en el puerto ${port}`)
    });
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error)
  }
};


iniciarServidor()


export default app // exportar app para poder testearlo con supertest
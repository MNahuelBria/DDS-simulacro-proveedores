// acceder al ORM que cree en sequelize-init.js
import { sequelize, Proveedores } from "./sequelize-init.js";

// crear array de datos de proveedores
const proveedoresData = [
  {
    RazónSocial: "Suministros Rápidos S.A.",
    Telefono: 153123456,
    FechaAlta: "2023-01-15",
  },
  {
    RazónSocial: "Tecnología Avanzada Ltda.",
    Telefono: 156234567,
    FechaAlta: "2023-02-20",
  },
  {
    RazónSocial: "Papelería El Lápiz",
    Telefono: 154345678,
    FechaAlta: "2023-03-10",
  },
  {
    RazónSocial: "Muebles Modernos S.A.",
    Telefono: 153456789,
    FechaAlta: "2023-04-05",
  },
  {
    RazónSocial: "Electrónica del Futuro S.A.",
    Telefono: 156567890,
    FechaAlta: "2023-05-22",
  },
  {
    RazónSocial: "Alimentos Frescos S.R.L.",
    Telefono: 154678901,
    FechaAlta: "2023-06-30",
  },
  {
    RazónSocial: "Herramientas Profesionales Inc. S.R.L.",
    Telefono: 153789012,
    FechaAlta: "2023-07-18",
  },
  {
    RazónSocial: "Textiles del Sur",
    Telefono: 156890123,
    FechaAlta: "2023-08-25",
  },
  {
    RazónSocial: "Química Industrial S.A.",
    Telefono: 154901234,
    FechaAlta: "2023-09-12",
  },
  {
    RazónSocial: "Transportes Rápidos y Seguros",
    Telefono: 153012345,
    FechaAlta: "2023-10-07",
  }
]

// crear proveedores en la base de datos (por medio de una funcion asincrona)
async function crearTablas() {
  try {
      // Sincronizar tablas con la base de datos
      await sequelize.sync();  // Crea las tablas si no existen
      console.log('Tablas creadas y sincronizadas');
  } catch (error) {
      console.error('Error al crear las tablas:', error);
  }
}

//funcion asincrona que inserta los datos de cada modelo
async function insertarDatos(modelo, datos) {
  try {
      await modelo.bulkCreate(datos);
      console.log(`Datos insertados correctamente en la tabla ${modelo.name}`);
  } catch (error) {
      console.error(`Error al insertar datos en la tabla ${modelo.name}:`, error);
  }
}

// funcion inicializadora de la creacion de la tabla y de 
// insertar datos en la tabla
const inicializarDB = async () => {
  try {

      // sincronizar y crear las base de datos
      await crearTablas()

      //agregar cada insercion de cada modelo
      await insertarDatos(Proveedores, proveedoresData),
      
      console.log('La base de datos fue inicializada con exito')
  }
  catch (error){
      console.error('Error al inicializar la base de datos:', error);
  }
}

// ejecutar la funcion inicializadora
export { inicializarDB } 
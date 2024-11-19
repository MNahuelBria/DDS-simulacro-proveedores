// acceder al ORM que cree en sequelize-init.js
import { sequelize, Proveedor } from "./sequelize-init.js";

// crear array de datos de proveedores
const proveedoresData = [
  {
    RazonSocial: "Suministros Rápidos S.A.",
    FechaAlta: "2023-01-15",
    Telefono: 153123456
  },
  {
    RazonSocial: "Tecnología Avanzada Ltda.",
    FechaAlta: "2023-02-20",
    Telefono: 156234567
  },
  {
    RazonSocial: "Papelería El Lápiz",
    FechaAlta: "2023-03-10",
    Telefono: 154345678,
  },
  {
    RazonSocial: "Muebles Modernos S.A.",
    FechaAlta: "2023-04-05",
    Telefono: 153456789
  },
  {
    RazonSocial: "Electrónica del Futuro S.A.",
    FechaAlta: "2023-05-22",
    Telefono: 156567890
  },
  {
    RazonSocial: "Alimentos Frescos S.R.L.",
    FechaAlta: "2023-06-30",
    Telefono: 154678901
  },
  {
    RazonSocial: "Herramientas Profesionales Inc. S.R.L.",
    FechaAlta: "2023-07-18",
    Telefono: 153789012
  },
  {
    RazonSocial: "Textiles del Sur",
    FechaAlta: "2023-08-25",
    Telefono: 156890123
  },
  {
    RazonSocial: "Química Industrial S.A.",
    FechaAlta: "2023-09-12",
    Telefono: 154901234
  },
  {
    RazonSocial: "Transportes Rápidos y Seguros",
    FechaAlta: "2023-10-07",
    Telefono: 153012345
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
      await insertarDatos(Proveedor, proveedoresData),
      
      console.log('La base de datos fue inicializada con exito')
  }
  catch (error){
      console.error('Error al inicializar la base de datos:', error);
  }
}

// ejecutar la funcion inicializadora
export { inicializarDB } 
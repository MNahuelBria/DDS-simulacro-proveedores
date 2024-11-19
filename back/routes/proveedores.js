// importacion de librerias
import express from 'express';
import { Proveedor } from '../base-orm/sequelize-init.js';
import { ValidationError } from 'sequelize';


// crear un nuevo router para los endpoints de proveedores
const router = express.Router();

// Obtener todos los Proveedores
router.get('/proveedores', async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll({
        attributes: [
          "IdProveedor",
          "RazonSocial",
          "Telefono",
          "FechaAlta"
        ],
        order: [["RazonSocial", "ASC"]],
      });
    
      return res.json(proveedores);  
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los Proveedores' });
  }
});

// cargar un nuevo proveedor en la base de datos
router.post('/proveedores', async (req, res) => {
  try {

    // parametros a pasar en el body
    const { RazonSocial, Telefono, FechaAlta } = req.body;

    // validacion de que la razon social y la fecha de alta no sean nulas
    if (!RazonSocial || !Telefono || !FechaAlta) {
      return res.status(400).json({ message: 'Todos los campos son requeridos.' });
      }

    const nuevoProveedor = await Proveedor.create(
      {
        RazonSocial,
        Telefono,
        FechaAlta
      });
    res.status(200).json(nuevoProveedor);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Manejo específico de errores de validación
      res.status(400).json({ error: error.errors.map(e => e.message) });
    } else {
      // Manejo de otros tipos de errores
      res.status(400).json({ error: error.message });
    }
  }
});

export default router
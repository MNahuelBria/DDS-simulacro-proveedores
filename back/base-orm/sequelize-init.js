// importar el modulo de sequelize
import { Sequelize, DataTypes } from "sequelize";

// definir la conexion a la base de datos
const sequelize = new Sequelize("sqlite:" + "../back/.data/proveedores.db");

// definicion del modelo de proveedores
const Proveedor = sequelize.define('proveedores', {
  IdProveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },  
  RazonSocial: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Razon Social es requerido",
      },
      len: {
        args: [5, 60],
        msg: "Razón Social debe ser tipo caracteres, entre 5 y 60 de longitud",
      },
    },
  },
  FechaAlta: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Fecha de alta es requerida",
      }
    }
  },
  Telefono: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Teléfono es requerido",
        },
      len: {
        args: [9, 9],
        msg: "Teléfono debe ser de 9 dígitos",
        },
      } 
    }
  },
  {
  // pasar a mayusculas
  hooks: {
    beforeValidate: function (proveedor, options) {
      if (typeof proveedor.RazonSocial === "string") {
        proveedor.RazonSocial = proveedor.RazonSocial.toUpperCase().trim();
      }
    },
  },
  timestamps: false,
  freezeTableName: true
});

export {
  sequelize,
  Proveedor
};
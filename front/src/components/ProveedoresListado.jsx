// src/components/ProveedoresListado.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, Container } from 'react-bootstrap';

const ProveedoresListado = ({ onAgregarClick }) => {
    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/proveedores')
        .then(response => {
            setProveedores(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los proveedores:', error);
        });
    }, []);

    return (
    <Container>
        <h2>Listado de Proveedores</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Razón Social</th>
                    <th>Teléfono</th>
                    <th>Fecha de Alta</th>
                </tr>
            </thead>
            <tbody>
                {proveedores.map(proveedor => (
                    <tr key={proveedor.IdProveedor}>
                    <td>{proveedor.RazonSocial}</td>
                    <td>{proveedor.Telefono}</td>
                    <td>{proveedor.FechaAlta}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        <div className="d-flex justify-content-end mb-3">
            <Button onClick={onAgregarClick}>Agregar</Button>
        </div>
    </Container>
    )
}

export default ProveedoresListado
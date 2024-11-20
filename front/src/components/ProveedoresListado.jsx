// src/components/ProveedoresListado.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, ListGroup, Container } from 'react-bootstrap';

const ProveedoresListado = ({ onAgregarClick }) => {
    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        axios.get('/api/proveedores')
        .then(response => {
            setProveedores(response.data.rows);
        })
        .catch(error => {
            console.error('Error al obtener los proveedores:', error);
        });
    }, []);

    return (
    <Container>
        <h2>Listado de Proveedores</h2>
        <Button onClick={onAgregarClick} className="mb-3">Agregar</Button>
        <ListGroup>
            {proveedores.map(proveedor => (
            <ListGroup.Item key={proveedor.IdProveedor}>
                {proveedor.RazonSocial} - {proveedor.Telefono} - {proveedor.FechaAlta}
            </ListGroup.Item>
        ))}
        </ListGroup>
    </Container>
    )
}

export default ProveedoresListado
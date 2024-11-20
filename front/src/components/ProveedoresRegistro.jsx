import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const ProveedoresRegistro = ({ onRegistroExitoso }) => {
    const [razonSocial, setRazonSocial] = useState('')
    const [fechaAlta, setFechaAlta] = useState('')
    const [telefono, setTelefono] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        const nuevoProveedor = {
            RazonSocial: razonSocial,
            FechaAlta: fechaAlta,
            Telefono: telefono
        }

        axios.post('http://localhost:4000/api/proveedores', nuevoProveedor)
        .then(response => {
            onRegistroExitoso()
        }).catch(error => {
            console.error('Error al registrar el proveedor:', error)
        })
    }

    return (
        <Container>
            <h2>Registrar Proveedor</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formRazonSocial">
                    <Form.Label>Razón Social</Form.Label>
                    <Form.Control type="text" value={razonSocial}
                    onChange={(e) => setRazonSocial(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formFechaAlta">
                    <Form.Label>Fecha de Alta</Form.Label>
                    <Form.Control type="date" value={fechaAlta}
                    onChange={(e) => setFechaAlta(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" value={telefono}
                    onChange={(e) => setTelefono(e.target.value)} required/>
                </Form.Group>
            </Form>
            <div className='d-flex justify-content-center'>
                <Button variant="primary" type="submit" className="mt-3 mx-2">
                    Registrar
                </Button>
                <Button variant="secondary" onClick={onRegistroExitoso} className="mt-3 mx-2">
                Volver
                </Button>
            </div>
            
        </Container>
    )}

export default ProveedoresRegistro
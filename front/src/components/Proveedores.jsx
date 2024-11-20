import React, { useState } from "react";
import ProveedoresListado from "./ProveedoresListado";
import ProveedoresRegistro from "./ProveedoresRegistro";
import { Container } from "react-bootstrap";

const Proveedores = () => {
    const [view, setView] = useState("listado");

    const handleAgregarClick = () => {
        setView("registro");
    };

    const handleRegistroExitoso = () => {
        setView("listado");
    };

    return (
        <Container>
            {view === "listado" ? (
                <ProveedoresListado onAgregarClick={handleAgregarClick} />
            ) : (
                <ProveedoresRegistro onRegistroExitoso={handleRegistroExitoso} />
            )}
        </Container>
    )
}

export default Proveedores

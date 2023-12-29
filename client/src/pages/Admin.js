import React from "react";
import { Button, Container } from "react-bootstrap";

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"}>Добавить тип</Button>
            <Button variant={"outline-dark"}>Добавить бренд</Button>
            <Button variant={"outline-dark"}>Добавить устройство</Button>
        </Container>
    );
};

export default Admin;
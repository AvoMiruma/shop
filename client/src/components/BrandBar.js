import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return(
        <Row className="d-flex">
            {device.brands.map(brand => 
            <Col>
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className={"p-3"}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>  
            </Col>      
            )}
        </Row>
    );
})

export default BrandBar;
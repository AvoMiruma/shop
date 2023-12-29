import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.bing.com/images/search?view=detailV2&ccid=0iqvqUM%2b&id=144168CC225513177DCCFDB80C574F8DA880608B&thid=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&mediaurl=https%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2019%2f09%2f432739-lake-pond-golden-trees-tropical-forest-stream-leaves-hdr-ultrahd-black-white-hd-4k-wallpaper-3840x2160.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d22aafa9433efcc9ed4d9a7808c05a8a%3frik%3di2CAqI1PVwy4%252fQ%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=images&simid=608010324247783692&FORM=IRPRST&ck=B7624969539C28ABFD57437A8B19724A&selectedIndex=4&itb=0&ajaxhist=0&ajaxserp=0"}
    const description = [
        {id: 1, title: 'Оперативна память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процесор', description: 'Пентиум 3'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Акумулятор', description: '4000'},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{height: 300, width: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От {device.price} грн</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>                    
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 15}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
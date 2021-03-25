import React from 'react';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import tabletIcon from './assets/tablet.png'
import pictographicIcon from './assets/pictographic.png';
import helpIcon from './assets/help.png';
import equipmentIcon from './assets/equipment.png';
import TopCurve from './TopCurve.js';
import BottomCurve from './BottomCurve.js';
import BackButton from './BackButton.js';
import './App.css';



function LinkPage(){
    return(
        
        <Container fluid>
        <TopCurve heading='Link Page'/>
        <BackButton/>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={tabletIcon}/>
            <Card.Body>
            <Button variant="primary" style={{"marginLeft": '1.2rem'}}>Redeem Your Free Tablet</Button>
             </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictographicIcon}/>
            <Card.Body>
            <Button variant="primary" style={{"marginLeft": '2rem'}}>Pictographic Symbols</Button>
             </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={helpIcon}/>
            <Card.Body>
            <Button variant="primary" style={{"marginLeft": '1.35rem'}} >Scope Advice & Support</Button>
             </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={equipmentIcon}/>
            <Card.Body>
            <Button variant="primary">Redeem Accessiblity Equipment</Button>
             </Card.Body>
            </Card>
            </Col>
        </Row>
        <BottomCurve/>
    </Container>
        
    );
}

export default LinkPage;
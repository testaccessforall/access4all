import React from 'react';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TopCurve from './TopCurve.js'
import BottomCurve from './BottomCurve.js'
import BackButton from './BackButton.js';

import adarescueIcon from './assets/adarescue.png';
import fuzzballIcon from './assets/fuzzball.png';
import nutellaIcon from './assets/nutella.png';
import babyIcon from './assets/baby.png';



function Games(){
    return(
        <Container fluid>
        <TopCurve heading = 'Games'/>
        <BackButton/>
        
        <Row style={{"marginTop": '4rem'}}>
            <Col>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" href="https://openprocessing.org/sketch/646959" target="_blank"
             rel="noopener noreferrer" src= {adarescueIcon} />
            <Card.Body>
            <Button variant="primary" href="https://openprocessing.org/sketch/646959" target="_blank"
             rel="noopener noreferrer" style={{"marginLeft": '4rem'}}>Ada Rescue</Button>
             </Card.Body>
            </Card>
            </Col>
            
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={nutellaIcon} />
            <Card.Body>
            
            <Button variant="primary" href= "https://nutella-goblinz-fuzzball-official.mrnutella.repl.co/" target="_blank"
             rel="noopener noreferrer" style={{"marginLeft": '4rem'}}>Nutella Fling</Button>
             </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={fuzzballIcon} />
            <Card.Body>
            <Button variant="primary"  href= "https://go-go-fuzzball-coconut.programye.repl.co/" target="_blank"
             rel="noopener noreferrer" style={{"marginLeft": '4rem'}}>Fuzzball</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={babyIcon} />
           
            <Card.Body>
            <Button variant="primary" href= "https://baby-bandits-experimental.mrnutella.repl.co/" target="_blank"
             rel="noopener noreferrer" style={{"marginLeft": '4rem'}}>Baby Bandents</Button>
             </Card.Body>
            </Card>
            </Col>
        </Row>
        <BottomCurve/>
        
    </Container>
    );
}

export default Games;
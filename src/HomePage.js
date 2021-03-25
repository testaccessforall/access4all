import React from 'react';
import TopCurve from './TopCurve.js';
import BottomCurve from './BottomCurve.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';
import { useHistory} from 'react-router-dom';
import videoIcon from './assets/videoIcon.png';
import keyboardIcon from './assets/keyboardIcon.jpg';
import gamesIcon from './assets/gameIcon.png';
import linkIcon from './assets/linkIcon.png';



function HomePage(){
    let history = useHistory();

    function navigateToVideoCall(){
		history.push(`/videocall`)
    }

    function navigateToWebChat(){
		history.push(`/webchat`)
    }

    function navigateToGamesPage(){
		history.push(`/games`)
    }
    
    function navigateToLinkPage(){
		history.push(`/linkpage`)
    }

    


    return(        
        <Container fluid>
        <TopCurve heading = 'Home Page'/>
        
        <Row style={{"marginTop": '4rem'}}>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" onClick={navigateToVideoCall} src= {videoIcon} />
            <Card.Body>
            <Button variant="primary" onClick={navigateToVideoCall} style={{"marginLeft": '4rem'}}>Video Call</Button>
             </Card.Body>
            </Card>
            </Col>
            
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" onClick={navigateToWebChat} src={keyboardIcon} />
            <Card.Body>
            
            <Button variant="primary" onClick={navigateToWebChat} style={{"marginLeft": '4rem'}}>Picto Chat</Button>
             </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" onClick={navigateToGamesPage} src={gamesIcon} />
            <Card.Body>
            <Button variant="primary" onClick={navigateToGamesPage} style={{"marginLeft": '4rem'}}>Play Games</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" onClick={navigateToLinkPage} src={linkIcon} />
           
            <Card.Body>
            <Button variant="primary" onClick={navigateToLinkPage} style={{"marginLeft": '4rem'}}>Helpful Links</Button>
             </Card.Body>
            </Card>
            </Col>
        </Row>
        <BottomCurve/>
        
    </Container>
        
    );
}

export default HomePage;
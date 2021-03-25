import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import groupIcon from './assets/groupIcon.jpeg'
import doubleIcon from './assets/doublepersoncall.jpeg'; 
import mumIcon from './assets/mum.jpeg';
import dadIcon from './assets/dadIcon.jpeg';
import dadFull from './assets/dadFull.jpeg';
import signOne from './assets/signLanguage.gif';
import onButtons from './assets/onButtons.png';
import { useHistory} from 'react-router-dom';



function VideoCall(){

    let history = useHistory();
    function navigateToVideoCall(){
		history.push(`/videocall`)
    }
    

    return(
        <Container fluid>
        <div className="heading">
        <h1>Video Chat</h1>
        </div>
        
        <Row>
            <Col className="video-first-col">
             <h2>Sign Language Translator</h2>
                <div className="gif-box-call">
                    <Image width="400" className="rounded mx-auto d-block" src= {signOne}/>
                    <div>
                    <p>Translated Text:</p>
                    <p>Traslated text would go here</p>
                    </div>
                </div>                
            </Col>
            <Col xs={6} className="video-second-col"> 
            <div className= "call-contact">     
            <Image width="900" style={{"marginLeft":'2.9rem',"marginTop": '3rem'}} src={dadFull} />
            <Image width="700"  style={{"marginLeft":'10rem',"marginTop": '10rem'}} src={onButtons}onClick={navigateToVideoCall}/>
                       
            </div>
            </Col>
            <Col className="video-third-col">
            <div className="contact-list">
            <h2>Contacts</h2>
            <h3>Groups</h3>
            <Image width="200" className="rounded mx-auto d-block" src={groupIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={doubleIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={mumIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={dadIcon} />
            </div>
             </Col>
        </Row>
        </Container>

    );

}


export default VideoCall;
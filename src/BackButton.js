import React from 'react';
import { useHistory} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import backButton from './assets/backButton.png';

function BackButton(){
    let history = useHistory();

    function navigateToHomePage(){
		history.push(`/`)
    }

    return(
        // <Button variant="primary" onClick={navigateToHomePage} style={{"marginLeft": '1rem'}}>Back</Button>
        <Image width="100" onClick={navigateToHomePage} src={backButton} rounded />


    )
}

export default BackButton;
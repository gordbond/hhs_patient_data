import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Player from './Player';
// import PlayerList from './PlayerList';
// import AddPlayerForm from './AddPlayerForm';

//style={{border:'red 2px solid'}}

class View0 extends Component {


  


  handleClickBegin = () =>{
    this.props.displayView(1);
  }
  

  render() {
    console.log(this.state);
    return (
        <Container id='bodyContent'>
            <Row noGutters>
            
              <h5 style={{margin:'80px 0 20px', color:'#002854'}}>Information</h5>
              <p style={{color:'#5e89b4'}}>
                This React.JS app was created for CREATE (Center for Data Science and Digital Health) as an interview project. There will be 3 main views. The first view will capture
                the user's first and last name. The second view will capture the user's date of birth, health card number and gender. The last view will display a summary of the information collected.
                The inputs are validated using best practices. 
              </p>
            </Row>

            <Row noGutters>
              <h5 style={{
                margin:'80px 0 20px', 
                color:'#002854', 
                backgroundColor:'rgb(215, 241, 240)', 
                padding: '10px', width:'100%'}}>
                  This app is to be used for academic purposes only.
              </h5>
              <Button 
                variant="info" 
                style={{margin:'20px 0 20px'}}
                onClick={this.handleClickBegin}
                >
                Begin
              </Button>
            </Row>
        </Container>
    );
  }
}

export default View0;

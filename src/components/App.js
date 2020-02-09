import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Player from './Player';
// import PlayerList from './PlayerList';
// import AddPlayerForm from './AddPlayerForm';

//style={{border:'red 2px solid'}}

class App extends Component {

  state = {
    patient: [
      {
        fName:'',
        lName:'',
        dob:'',
        healthCardNum:'',
        gender:''
      }
    ]
    
  };




  

  render() {
    console.log(this.state);
    return (
      //<div class="container" style={{width: "80%"}}>
      <div id="main">
        <Container>
          <Row style={{borderBottom:'2px solid #8a8c8d'}}>
            <Col xs={2}>
              <div id="logoContainer">
                <Image src="img/HHS_Logo.png" fluid />
              </div>
            </Col>
            <Col >
              <Jumbotron fluid style={{backgroundColor:'white'}}>
                <Container>
                  <h1 style={{color:'#002854'}}>Patient Information Validation</h1>
                  <p style={{color:'#5e89b4'}}>
                    This is a simple pateint input validation app.
                  </p>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          
          <Row noGutters>
            <h5 style={{margin:'80px 0 20px', color:'#002854'}}>Information</h5>
            <p style={{color:'#5e89b4'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada convallis magna vel sagittis. Morbi et ex nec tellus vestibulum mollis non nec risus. Nulla rutrum feugiat consequat. Nullam venenatis, mauris vitae luctus euismod, turpis lectus laoreet nibh, eu sodales nunc neque luctus elit. Cras at posuere diam. Donec suscipit ipsum odio, vel egestas nulla faucibus commodo. Aliquam maximus, quam quis gravida tincidunt, lacus enim auctor urna, non consectetur felis eros vel nibh. Integer faucibus risus arcu. Praesent aliquet purus sed est aliquam cursus. Curabitur consectetur dapibus justo. Sed augue massa, facilisis a augue ac, finibus mattis neque. Mauris augue nisi, tincidunt ut justo et, vestibulum cursus dui.
            </p>
          </Row>

          <Row noGutters>
            <h5 style={{margin:'80px 0 20px', color:'#002854', backgroundColor:'rgb(215, 241, 240)', padding: '10px', width:'100%'}}>Please enter your name below:</h5>
          </Row>
          
          
          <Row>
            <Col xs={12}>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Row noGutters>
                  <Button variant="info" style={{margin:'20px 0 20px'}}>Next</Button>
              </Row>
            </Form>
            </Col>
          </Row>
        </Container>
        
        </div>
        
          //<footer>Interview Project for CREATE - Made by Gord Bond</footer>
      //</div>
      
    );
  }
}

export default App;


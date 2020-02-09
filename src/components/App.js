import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import View from './View';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Player from './Player';
// import PlayerList from './PlayerList';
// import AddPlayerForm from './AddPlayerForm';

//style={{border:'red 2px solid'}}

class App extends Component {

 

  //State will retain the information collected from the user to be 
  //displayed as a summary on the last view.
  state = {
    viewNum: 0,
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



  handleDisplayView = (viewNum) =>{
    this.setState( ()=>{
      return{
        viewNum: viewNum
      };
    })
  }
  

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
                    Made for Hamilton Health Sciences, Center for Data Science and Digital Health.
                  </p>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <View changeView={this.state.viewNum} displayView={this.handleDisplayView}/>
          
        </Container>
        
        </div>
    );
  }
}

export default App;

{/* <Row noGutters>
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
          </Row> */}
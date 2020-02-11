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
        id: 1,
        fName:'',
        lName:'',
        dob:'',
        hcNum:0,
        gender:''
      }
    ]
  };

  prevId = 1;

  handleDisplayView = (data) =>{
    console.log(data);
   
    this.setState( previousState =>{
      return{
        viewNum: data.viewNum,
        patient:[
        {
          fName: data.fName,
          lName: data.lName,
          hcNum: data.hcNum,
          dob: data.dob,
          gender: data.gender,
          id: this.prevId +=1
        }
        , ...previousState.patient
        ]
      };
    })
  }


  

  render() {
    console.log(this.state);
    return (
      <div id="main">
        <Container>
          <Row style={{borderBottom:'2px solid #8a8c8d'}}>
            <Col xs={2}>
              <div id="logoContainer">
                <Image src="../../img/HHS_Logo.png"  fluid/>
              </div>
            </Col>
            <Col >
              <Jumbotron fluid style={{backgroundColor:'white'}}>
                <Container>
                  <h1 style={{color:'#002854'}}>Patient Information and Validation</h1>
                  <p style={{color:'#5e89b4'}}>
                    Made for Hamilton Health Sciences, Center for Data Science and Digital Health.
                  </p>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <View 
          changeView={this.state} 
          displayView={this.handleDisplayView}/>
          
        </Container>
        
        </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class View1 extends Component {

    handleBackButton = ()=>{
        this.props.displayView(0);
    }

    handleNextButton = ()=>{
        this.props.displayView(2);
    }
  

    
  
    render() {
      console.log(this.state);
      return (
          <Container>
            <Row noGutters>
                <h5 style={{margin:'80px 0 20px', 
                color:'#002854', 
                backgroundColor:'rgb(215, 241, 240)', 
                padding: '10px', width:'100%'}}
                >
                    Please enter your name below:
                </h5>
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
                    <Button variant="outline-info" style={{margin:'20px 20px 20px 0'}} onClick={this.handleBackButton}>Back</Button>
                    
                    <Button variant="info" style={{margin:'20px 20px 20px 0'}} onClick={this.handleNextButton}>Next</Button>
                </Row>
                </Form>
                </Col>
            </Row> 
          </Container>
      );
    }
  }
  
  export default View1;
  
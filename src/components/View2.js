import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class View2 extends Component {

    handleBackButton = ()=>{
        this.props.displayView(1);
    }

    handleNextButton = ()=>{
        this.props.displayView(3);
    }
    
  
    render() {
      console.log(this.state);
      return (
          <Container>
            <Row noGutters>
                <h5 style={{
                    margin:'80px 0 20px', 
                    color:'#002854', 
                    backgroundColor:'rgb(215, 241, 240)', 
                    padding: '10px', 
                    width:'100%'}}>Please enter your information below:
                </h5>
            </Row>
            
            
            <Row>
                <Col xs={12}>
                <Form>
                <Row>
                    <Col>
                    <Form.Control style={{margin:'20px 0'}} placeholder="Date of Birth" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Control style={{margin:'20px 0'}}  placeholder="Health Card Number" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Control style={{margin:'20px 0'}}  placeholder="Gender" />
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
  
  export default View2;
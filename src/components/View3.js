import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class View3 extends Component {

 

    //State will retain the information collected from the user to be 
    //displayed as a summary on the last view.
    state = {
  
      
    };
  
    
  
    render() {
      console.log(this.state);
      return (
          <Container>
            <Row noGutters>
                <h5 style={{margin:'80px 0 20px', color:'#002854', backgroundColor:'rgb(215, 241, 240)', padding: '10px', width:'100%'}}>Please enter your name below:</h5>
            </Row>
            
            
            <Row>
                <Table striped borderless>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Health Card Number</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Feb 2</td>
                            <td>123456789</td>
                            <td>Male</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </Row> 
          </Container>
      );
    }
  }
  
  export default View3;
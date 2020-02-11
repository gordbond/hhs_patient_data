import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SummaryRow from './SummaryRow';
import Button from 'react-bootstrap/Button';
class View3 extends Component {

 

    //State will retain the information collected from the user to be 
    //displayed as a summary on the last view.
    state = {
  
      
    };
  
    
    handleDoneButton = () =>{
        this.props.displayView(
            {viewNum: 0}
          );
    }
  
    render() {
      console.log(this.state);
      return (
          <Container>
            <Row noGutters>
                <h5 style={{margin:'80px 0 20px', color:'#002854', backgroundColor:'rgb(215, 241, 240)', padding: '10px', width:'100%'}}>Summary of patient information:</h5>
            </Row>
            
            
            <Row>
                <Table striped borderless>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Health Card Number</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.changeView.patient.map(
                            (row) => <SummaryRow {...row} key={row.id.toString()}/>
                        )}
                    </tbody>
                </Table>
            </Row> 
            <Row>
                <Button variant="info" 
                style={{margin:'20px 20px 20px 0'}} 
                onClick={this.handleDoneButton}>
                    Add another patient
                </Button>
            </Row>
          </Container>
      );
    }
  }
  
  export default View3;
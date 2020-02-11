import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class View1 extends Component {


    state = {
        viewNum: 2,
        fName:'',
        lName:'',
      }

    

    handleNextButton = ()=>{
        //Accepts only letters and some special characters
        let namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        //If there is an input pass state to display view
        if(this.state.fName !== '' && this.state.lName !== '')
        {
           
            if(namePattern.test(this.state.fName) && namePattern.test(this.state.lName)){
                this.props.displayView({
                    viewNum: this.state.viewNum,
                    fName: this.state.fName,
                    lName: this.state.lName,
                  });
            //If first name is not valid show error
            }else if(!namePattern.test(this.state.fName) && namePattern.test(this.state.lName)){
                document.getElementById('fNameError').innerHTML = 'Please enter a valid name.';
                document.getElementById('fNameError').style.display = 'block';
                document.getElementById('fNameInput').style.border = 'red 1px solid';
            // If last name is not valid show error
            }else if(!namePattern.test(this.state.lName) && namePattern.test(this.state.fName)){
                document.getElementById('lNameError').innerHTML = 'Please enter a valid name.';
                document.getElementById('lNameError').style.display = 'block';
                document.getElementById('lNameInput').style.border = 'red 1px solid';
            //If both first and last name are not valid show both errors
            }else{
                document.getElementById('fNameError').innerHTML = 'Please enter a valid name.';
                document.getElementById('fNameError').style.display = 'block';
                document.getElementById('fNameInput').style.border = 'red 1px solid';
                document.getElementById('lNameError').innerHTML = 'Please enter a valid name.';
                document.getElementById('lNameError').style.display = 'block';
                document.getElementById('lNameInput').style.border = 'red 1px solid';
            }
        }else if(this.state.fName === '' && this.state.lName !== ''){
            //If user tries to move on without filling in first name - show error
            document.getElementById('fNameError').style.display = 'block';
            document.getElementById('fNameInput').style.border = 'red 1px solid';
            //if last name is also not valid
            if(!namePattern.test(this.state.lName)){
                document.getElementById('lNameError').innerHTML = 'Please enter a valid name.';
                document.getElementById('lNameError').style.display = 'block';
                document.getElementById('lNameInput').style.border = 'red 1px solid';
            }
        }else if(this.state.fName !== '' && this.state.lName === ''){
            //If user tries to move on without last name - show error
            document.getElementById('lNameError').style.display = 'block';
            document.getElementById('lNameInput').style.border = 'red 1px solid';
            //if first name is also not valid
            if(!namePattern.test(this.state.fName)){
                document.getElementById('fNameError').innerHTML = 'Please enter a valid name.';
                document.getElementById('fNameError').style.display = 'block';
                document.getElementById('fNameInput').style.border = 'red 1px solid';
            }
        }else{//If user tries to move on without filling in first and last name - show error
            document.getElementById('fNameError').style.display = 'block';
            document.getElementById('fNameInput').style.border = 'red 1px solid';
            document.getElementById('lNameError').style.display = 'block';
            document.getElementById('lNameInput').style.border = 'red 1px solid';
        }
    }
  

    handleChangefName = (e) =>{
        this.setState({fName:e.target.value})
        
        //Remove error feedback if no error
        if(this.state.fName !== ''){
            document.getElementById('fNameInput').style.border = '#ced4da 1px solid';
            document.getElementById('fNameError').style.display = 'none';
        }
    }

    handleChangelName = (e) =>{
        this.setState({lName:e.target.value})
        
        //Remove error feedback if no error
        if(this.state.lName !== ''){
            document.getElementById('lNameInput').style.border = '#ced4da 1px solid';
            document.getElementById('lNameError').style.display = 'none';
        }
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
                    Please enter your name below (1/2):
                </h5>
            </Row>
            
            
            <Row>
                <Col xs={12}>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control 
                                    placeholder="First name" 
                                    onChange={this.handleChangefName} 
                                    id='fNameInput'
                                    
                                />
                                <Form.Control.Feedback 
                                type="invalid" 
                                id="fNameError">
                                    First name is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col>
                            <Form.Control 
                                placeholder="Last name"
                                onChange={this.handleChangelName} 
                                id='lNameInput'
                            />
                            <Form.Control.Feedback 
                            type="invalid" 
                            id="lNameError">
                                Last name is required.
                            </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row noGutters>
                            <Button 
                            id='nextButton'
                            variant="info" 
                            style={{margin:'20px 20px 20px 0'}} 
                            onClick={this.handleNextButton}
                            >
                                Next
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Row> 
        </Container>
      );
    }
  }
  
  export default View1;
  
//   style={{display:'block'}}
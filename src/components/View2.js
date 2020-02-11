import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class View2 extends Component {


    state = {
        viewNum: 3,
        dob:'',
        hcNum:'',
        gender:''
      }

      patIndex = 0;
     

    handleNextButton = ()=>{
        //Captures numeric year, month and day of any year 1900-2099, month 1-12, day 1-31
        let datePattern = /^((?:19|20)[0-9]{2})-(0?[1-9]|10|11|12)-(0?[1-9]|[1-2][0-9]|3[0-1])$/
        let ohipLength = /^(([0-9]{4})+(-[0-9]{3})+(-[0-9]{3}))$|^[0-9]{10}$/
        if(this.state.dob !== '' && this.state.hcNum !== '' && this.state.gender !== '')
        {
            //If all inputs are valid
            if(datePattern.test(this.state.dob) && ohipLength.test(this.state.hcNum) && this.validateOhip(this.state.hcNum))
            {
                this.props.displayView({
                viewNum: this.state.viewNum,
                fName:this.props.changeView.patient[this.patIndex].fName,
                lName:this.props.changeView.patient[this.patIndex].lName,
                dob: this.state.dob,
                hcNum: this.state.hcNum,
                gender: this.state.gender,
                });
            }
            //If no valid date entered
            else if(!datePattern.test(this.state.dob)){
                document.getElementById('dateError').innerHTML = 'Not a valid date.';
                document.getElementById('dateError').style.display = 'block';
                document.getElementById('dateInput').style.border = 'red 1px solid';
            //If ohip number is not 10 digits
            }else if(!ohipLength.test(this.state.hcNum)){
                document.getElementById('hcNumError').innerHTML = 'Health card must be 10 digits.';
                document.getElementById('hcNumError').style.display = 'block';
                document.getElementById('hcNumInput').style.border = 'red 1px solid';
            //If not a valid health card number according to MOD10
            }else if(!this.validateOhip(this.state.hcNum)){
                document.getElementById('hcNumError').innerHTML = 'Health card is not valid (MOD10).';
                document.getElementById('hcNumError').style.display = 'block';
                document.getElementById('hcNumInput').style.border = 'red 1px solid';
            }
          this.prevPatIndex += 1;
        }
        //If just dob empty
        if(this.state.dob === ''){
            document.getElementById('dateError').style.display = 'block';
            document.getElementById('dateInput').style.border = 'red 1px solid';
        }
        //If just healthcard number empty
        if(this.state.hcNum === ''){
            document.getElementById('hcNumError').style.display = 'block';
            document.getElementById('hcNumInput').style.border = 'red 1px solid';
        }
        //If just gender empty
        if(this.state.gender === ''){
            document.getElementById('genderError').style.display = 'block';
            document.getElementById('genderInput').style.border = 'red 1px solid';
        }
        //If all inputs empty
        if(this.state.dob === '' && this.state.hcNum === '' && this.state.gender === ''){
            document.getElementById('dateError').style.display = 'block';
            document.getElementById('dateInput').style.border = 'red 1px solid';
            document.getElementById('hcNumError').style.display = 'block';
            document.getElementById('hcNumInput').style.border = 'red 1px solid';
            document.getElementById('genderError').style.display = 'block';
            document.getElementById('genderInput').style.border = 'red 1px solid';
        }
    }


    handleDOB = (e) =>{
        console.log(e.target.value)
        this.setState({dob:e.target.value})
        if(e.target.value !== ''){
            document.getElementById('dateError').style.display = 'none';
            document.getElementById('dateInput').style.border = '#ced4da 1px solid';
        }
    }

    handleHC = (e) => {
        this.setState({hcNum:e.target.value})
        if(e.target.value !== ''){
            document.getElementById('hcNumError').style.display = 'none';
            document.getElementById('hcNumInput').style.border = '#ced4da 1px solid';
        }
    }

    handleGender = (e) =>{
        this.setState({gender:e.target.value})
        if(e.target.value !== ''){
            document.getElementById('genderError').style.display = 'none';
            document.getElementById('genderInput').style.border = '#ced4da 1px solid';
        }
    }
    //Prevents future date from being chosen
    handleDateLoad = (e) => {
        console.log("IT LOADED");
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
         if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 
        today = yyyy+'-'+mm+'-'+dd;
        document.getElementById("dateInput").setAttribute("max", today);
      
      today = yyyy + '-' + mm + '-' + dd;
      console.log(today);
    }

    validateOhip = (num) =>{
        num = num.replace(/-/g,'');
    
        var check;
        var checksum = ''; 
        var checksumNum =0;
        for(var i=num.length-1; i--; ){
            if(i%2===0){
                checksum +=  (parseInt(num.charAt(i))*2).toString();
            }else{
                checksum += num.charAt(i)
            }
        }
        for(i = 0; i<checksum.length; i++){
            checksumNum += parseInt(checksum.charAt(i));
        }
        console.log("Checksum after first pass "+checksum)
        console.log("ChecksumNUM after first pass "+checksumNum)
      
        check = (10-(checksumNum % 10)) % 10; // 0 when checksum is 10
        var checkDigit = num % 10;
    
        return check === checkDigit;
    }
    
  
    render() {
        console.log(this.validateOhip('30056000080008'));
        return (
          <Container>
            <Row noGutters>
                <h5 style={{
                    margin:'80px 0 20px', 
                    color:'#002854', 
                    backgroundColor:'rgb(215, 241, 240)', 
                    padding: '10px', 
                    width:'100%'}}>Please enter your information below (2/2):
                </h5>
            </Row>
            
            
            <Row>
                <Col xs={12}>
                    <Form>
                        <Row>
                            <Form.Group 
                            style={{padding:'0 15px', width:'100%'}} 
                            onChange={this.handleDOB}
                            onFocus={this.handleDateLoad}>
                                <Form.Control
                                    id='dateInput'
                                    type="date"
                                    min='1899-01-01' 
                                    max='2000-13-13'
                                />
                                <Form.Control.Feedback 
                                type="invalid" 
                                id="dateError">
                                    Date of birth is required.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Control 
                            id='hcNumInput'
                            style={{margin:'10px 0 5px 0'}}  
                            placeholder="Health Card Number" 
                            onChange={this.handleHC}/>
                            </Col>
                            <Form.Control.Feedback 
                            type="invalid" 
                            style={{margin:'0 15px', padding: '0', marginTop:'0'}}
                            id="hcNumError">
                                Health Card Number is required.
                            </Form.Control.Feedback>
                        </Row>
                        <Row noGutters>
                            <Form.Control 
                            id='genderInput'
                            as="select" 
                            style={{margin:'20px 0 5px 0'}}
                            onChange={this.handleGender} 
                            defaultValue={'Choose one...'}>
                                <option disabled>Choose one...</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>I'd prefer not to answer</option>
                            </Form.Control>
                            <Form.Control.Feedback 
                            type="invalid" 
                            style={{padding: '0', marginTop:'0'}}
                            id="genderError">
                                Must choose a gender option.
                        </Form.Control.Feedback>
                        </Row>
                        <Row noGutters>
                            
                                <Button 
                                variant="info" 
                                style={{margin:'20px 20px 20px 0'}} 
                                onClick={this.handleNextButton}>
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
  
  export default View2;
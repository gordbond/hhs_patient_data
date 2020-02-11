import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class SummaryRow extends PureComponent {


  
    render() {
        const{
            id,
            fName,
            lName,
            dob,
            hcNum,
            gender
        } = this.props;

        if(id%4===0){
        return (
            <tr>
                <td>{fName}</td>
                <td>{lName}</td>
                <td>{dob}</td>
                <td>{hcNum}</td>
                <td>{gender}</td>
            </tr>
        );
        }else{
            return(
                null
            )
        }
    }
  }
  
  export default SummaryRow;
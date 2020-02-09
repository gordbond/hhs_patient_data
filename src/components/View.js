import React from 'react'; 

import View0 from './View0'; 
import View1 from './View1'; 
import View2 from './View2'; 
import View3 from './View3'; 


// a component that will render one or more components
// based on a switch statement
export const SwitchView = (props) => {

        let Output; // save the rendered JSX to return

        // check the type of the component given in props
        switch (props.changeView) {

        
            case 0:
                Output = ( <View0 displayView={props.displayView}/>);
                break;

            case 1:
                Output = ( <View1 displayView={props.displayView}/>);
                break;

            case 2:
                Output = ( <View2 displayView={props.displayView}/>);
                break;

            case 3:
                Output = ( <View3 displayView={props.displayView}/>);
                break;

            default:
                Output = (<View0 displayView={props.displayView}/>);
                break;

                }

            return Output; // return the output created in switch/case

        };

    export default SwitchView;
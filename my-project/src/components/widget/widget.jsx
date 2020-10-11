import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';

class Widget extends React.Component{
    
    render(){
        return(
            <div className={"container-fluid widgetWrapper"}>
                <div className={"widget"}>
                    <div className={"d-flex justify-content-between"}>
                        <p>התהליך עדיין פתוח לתשובות. המשתתפכים יוכלו לראות את התובנות הסופיות רק לאחר שיאושרו על ידי אחד ממנהלי התהליך</p>
                        <img id={"logo"} src={Logo} alt={"logo"} />
                    </div>
                </div>
            </div>
        )
    }
};

export default Widget;
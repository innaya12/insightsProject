import React from 'react';
import './style.css';
import Insights from '../insights/insights';

class NavBar extends React.Component {
    // onClick methods - to activate the nav bar
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         showComponent: false
    //     };
    // }

    // onShow=()=>{
    //     this.setState({
    //         showComponent: !this.state.showComponent
    //     })
    // }

    render() {
        return (
            <div className={"container"}>
                <ul className={"d-flex navBar justify-content-between"}>
                    <li>החלטות</li>
                    {/* <li onClick={this.onShow}>תובנות</li> */}
                    <li>תובנות</li>
                    <li>תשובות</li>
                    <li>רקע</li>
                </ul>
                {/* {this.state.showComponent === true &&
                <div>
                    <Insights />
                </div>
                } */}
            </div>
        )
    }
};

export default NavBar;
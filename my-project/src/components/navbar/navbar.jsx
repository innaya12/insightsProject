import React from 'react';
import './style.css';
import Insights from '../insights/insights';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showComponent: false
        };
    }

    onShow=()=>{
        console.log("clicked", this.state.showComponent);
        this.setState({
            showComponent: !this.state.showComponent
        })
        console.log("worked")
    }

    render() {
        return (
            <div className={"container"}>
                <ul className={"d-flex navBar justify-content-between"}>
                    <li>החלטות</li>
                    <li onClick={this.onShow}>תובנות</li>
                    <li>תשובות</li>
                    <li>רקע</li>
                </ul>
                {this.state.showComponent === true &&
                <div>
                    <Insights />
                </div>
                }
            </div>
        )
    }
};

export default NavBar;